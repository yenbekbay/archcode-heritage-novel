import "server-only";

import { env } from "#config/env.ts";
import {
  MemeCaptionRequestSchema,
  MemeCaptionResponseSchema,
} from "#lib/meme-caption.ts";
import { z } from "zod";

const ProviderResponseSchema = z.discriminatedUnion("success", [
  z.object({ success: z.literal(true), data: MemeCaptionResponseSchema }),
  z.object({ success: z.literal(false) }),
]);

// NOTE: This anonymous capability has no player account or private resource.
// Bound account usage per server instance without retaining visitor identifiers.
let windowStart = 0;
let requestCount = 0;
let activeRequests = 0;

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return failure(403, "ORIGIN_DENIED");
  }
  if (
    request.headers.get("content-type")?.split(";")[0]?.trim() !==
    "application/json"
  ) {
    return failure(415, "UNSUPPORTED_CONTENT_TYPE");
  }

  let raw: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) {
      return failure(400, "INVALID_BODY");
    }

    const chunks: Uint8Array[] = [];
    let bytes = 0;
    try {
      while (true) {
        const chunk = await reader.read();
        if (chunk.done) {
          break;
        }

        bytes += chunk.value.byteLength;
        if (bytes > 16_384) {
          await reader.cancel();
          return failure(413, "BODY_TOO_LARGE");
        }

        chunks.push(chunk.value);
      }
    } finally {
      reader.releaseLock();
    }

    raw = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return failure(400, "INVALID_BODY");
  }

  const input = MemeCaptionRequestSchema.safeParse(raw);
  if (!input.success) {
    return failure(400, "INVALID_CAPTION");
  }
  if (env.IMGFLIP_USERNAME == null || env.IMGFLIP_PASSWORD == null) {
    return failure(503, "CAPTION_UNAVAILABLE");
  }

  const now = Date.now();
  if (now - windowStart >= 60_000) {
    windowStart = now;
    requestCount = 0;
  }
  if (requestCount >= 20 || activeRequests >= 2) {
    return failure(429, "CAPTION_LIMIT_REACHED");
  }

  requestCount += 1;
  activeRequests += 1;
  try {
    const form = new FormData();
    form.set("template_id", input.data.templateId);
    form.set("username", env.IMGFLIP_USERNAME);
    form.set("password", env.IMGFLIP_PASSWORD);

    for (const [index, text] of input.data.captions.entries()) {
      form.set(`boxes[${index}][text]`, text);
    }

    const response = await fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: form,
      cache: "no-store",
      signal: AbortSignal.any([request.signal, AbortSignal.timeout(20_000)]),
    });

    if (!response.ok) {
      console.error("Imgflip caption request failed", {
        status: response.status,
      });
      return failure(502, "CAPTION_PROVIDER_FAILED");
    }

    const result = ProviderResponseSchema.safeParse(await response.json());
    if (!result.success || !result.data.success) {
      console.error("Imgflip caption response rejected", {
        code: result.success ? "PROVIDER_REJECTED" : "INVALID_RESPONSE",
      });
      return failure(502, "CAPTION_PROVIDER_FAILED");
    }

    return Response.json(result.data.data, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    // NOTE: Provider error text and payloads can contain credentials or captions.
    console.error("Imgflip caption request failed", {
      name: error instanceof Error ? error.name : "UnknownError",
    });
    return failure(502, "CAPTION_PROVIDER_FAILED");
  } finally {
    activeRequests -= 1;
  }
}

function failure(status: number, code: string) {
  return Response.json(
    { error: { code, message: "Не удалось создать мем. Попробуйте ещё раз." } },
    {
      status,
      headers: { "Cache-Control": "no-store" },
    },
  );
}
