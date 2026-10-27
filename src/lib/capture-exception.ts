import { cacheSignal } from "react";
import { z } from "zod";
import {
  getDiagnosticTags,
  getSafeDiagnosticError,
  logDiagnosticError,
  type DiagnosticContext,
} from "./diagnostics.ts";
import type { JsonValue } from "./json.ts";

type CaptureExceptionContext = {
  diagnostic?: DiagnosticContext;
  extra?: Record<string, JsonValue>;
};

const ErrorWithDigestSchema = z.looseObject({ digest: z.string() });

// NOTE: A transport and its UI fallback can receive the same failure through
// an `Error.cause` wrapper. Identity keeps independent equal messages visible.
const reportedErrors = new WeakSet<Error>();

// NOTE: A server render redacts an error it receives from a nested render,
// such as a cache fill, and keeps only its digest. The digest identifies the
// original failure, whichever copy is captured first.
const reportedDigests = new Set<string>();

// Dynamic import gates `@sentry/nextjs` and its 20+
// `@opentelemetry/instrumentation-*` transitives behind the production
// check, matching instrumentation*.ts so dev bundles that capture errors
// don't pull the SDK in statically.
// JavaScript lets any value be thrown, so a `catch` binding is `unknown` by
// contract. Every function here takes that value as `cause`, which is the
// name the codebase reserves for a value it has not parsed yet.
export function captureException(
  cause: unknown,
  context?: CaptureExceptionContext,
): void {
  // NOTE: A server render that has ended aborts its cache signal. Its
  // pending work fails with that cancellation and has no response to affect.
  if (cacheSignal()?.aborted === true) {
    return;
  }

  const errorChain = getErrorChain(cause);
  if (errorChain.some((error) => reportedErrors.has(error))) {
    return;
  }

  const parsedError = ErrorWithDigestSchema.safeParse(cause);
  const digest = parsedError.success ? parsedError.data.digest : undefined;
  if (digest !== undefined && reportedDigests.has(digest)) {
    return;
  }

  for (const error of errorChain) {
    reportedErrors.add(error);
  }

  if (digest !== undefined) {
    reportedDigests.add(digest);
  }

  const normalized = getSafeDiagnosticError(cause);

  const tags = getDiagnosticTags(context?.diagnostic);
  if (tags === undefined) {
    console.error(normalized);
  } else {
    console.error(normalized, tags);
  }
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  void captureInSentry({ context, digest, normalized }).catch(
    logDiagnosticError,
  );
}

function getErrorChain(cause: unknown): Error[] {
  const chain: Error[] = [];
  let current = cause;
  while (
    current instanceof Error &&
    chain.length < 5 &&
    !chain.includes(current)
  ) {
    chain.push(current);
    current = current.cause;
  }

  return chain;
}

async function captureInSentry(input: {
  context: CaptureExceptionContext | undefined;
  digest: string | undefined;
  normalized: Error;
}): Promise<void> {
  const sentry = await import("@sentry/nextjs");
  sentry.captureException(input.normalized, {
    extra: input.context?.extra,
    tags: {
      digest: input.digest,
      ...getDiagnosticTags(input.context?.diagnostic),
    },
  });
}
