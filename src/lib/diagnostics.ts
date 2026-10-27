import type * as Sentry from "@sentry/nextjs";
import { normalizeException } from "./normalize-exception.ts";

// Sentry SDK v11 collects every data category when `dataCollection` is
// unset. Each init disables them so the `beforeSend` sanitizer is not the
// only privacy boundary.
export const SENTRY_DATA_COLLECTION = {
  cookies: false,
  databaseQueryData: false,
  genAI: { inputs: false, outputs: false },
  graphQL: { document: false, variables: false },
  httpBodies: [],
  httpHeaders: false,
  queues: false,
  stackFrameVariables: false,
  urlQueryParams: false,
  userInfo: false,
} satisfies NonNullable<Parameters<typeof Sentry.init>[0]["dataCollection"]>;

// Diagnostic tags come from this allowlist so capture callers cannot attach
// arbitrary tags. Extend each union with a finite value when a new capture
// site needs it.
export type DiagnosticContext = {
  operation?: "http_request";
  path?: string;
  stage?: "request";
  status?: number;
};

export function getDiagnosticTags(
  context: DiagnosticContext | undefined,
): Record<string, string> | undefined {
  if (context === undefined) {
    return undefined;
  }

  const tags: Record<string, string> = {};
  if (context.operation !== undefined) {
    tags["diagnostic.operation"] = context.operation;
  }
  if (context.path !== undefined) {
    tags["diagnostic.path"] = getSafeRequestPath(context.path);
  }
  if (context.stage !== undefined) {
    tags["diagnostic.stage"] = context.stage;
  }
  if (
    context.status !== undefined &&
    Number.isInteger(context.status) &&
    context.status >= 100 &&
    context.status <= 599
  ) {
    tags["diagnostic.status"] = context.status.toString();
  }

  return Object.keys(tags).length === 0 ? undefined : tags;
}

export function sanitizeSentryEvent(
  event: Sentry.ErrorEvent,
): Sentry.ErrorEvent | null {
  if (isInjectedBrowserError(event) || isExpectedNextRenderAbort(event)) {
    return null;
  }

  if (event.message !== undefined) {
    event.message = getSafeErrorMessage(event.message);
  }

  for (const exception of event.exception?.values ?? []) {
    if (exception.value !== undefined) {
      exception.value = getSafeErrorMessage(exception.value);
    }
  }

  if (event.request !== undefined) {
    if (event.request.url !== undefined) {
      event.request.url = getSafeRequestPath(event.request.url);
    }

    delete event.request.cookies;
    delete event.request.data;
    delete event.request.headers;
    delete event.request.query_string;
  }

  delete event.user;
  delete event.breadcrumbs;
  return event;
}

// HACK: Native WebView bridges run outside the application bundle, and
// Sentry can mark their frames as in-app, so their errors are dropped only
// when no bundled application frame is present. Remove this filter once
// Sentry tags injected sources authoritatively.
function isInjectedBrowserError(event: Sentry.ErrorEvent): boolean {
  const frames = (event.exception?.values ?? []).flatMap(
    (exception) => exception.stacktrace?.frames ?? [],
  );

  if (hasBundledApplicationFrame(frames)) {
    return false;
  }

  const messages = [
    event.message,
    ...(event.exception?.values ?? []).map((exception) => exception.value),
  ].filter((message) => message !== undefined);

  return messages.some(
    (message) =>
      message === "Error invoking postMessage: Java object is gone" ||
      message.includes("window.webkit.messageHandlers"),
  );
}

// NOTE: Next.js throws this abort on purpose when a server render hands a
// segment to the browser, so it is dropped unless application code threw
// it.
function isExpectedNextRenderAbort(event: Sentry.ErrorEvent): boolean {
  const exceptions = event.exception?.values ?? [];
  if (
    !exceptions.some(
      (exception) =>
        exception.value ===
        "Bail out to client-side rendering: Render in Browser",
    )
  ) {
    return false;
  }

  const frames = exceptions.flatMap(
    (exception) => exception.stacktrace?.frames ?? [],
  );

  return (
    !hasBundledApplicationFrame(frames) &&
    frames.some((frame) =>
      frame.filename?.includes("/next/dist/compiled/next-server/app-page"),
    )
  );
}

function hasBundledApplicationFrame(
  frames: readonly { filename?: string; in_app?: boolean }[],
): boolean {
  return frames.some(
    (frame) =>
      frame.filename?.includes("/src/") === true ||
      (frame.in_app === true &&
        frame.filename?.includes("/_next/static/") === true),
  );
}

// NOTE: Copy only Error fields before logging or SDK capture. Structured thrown
// values can contain request bodies and credentials, so diagnostics retain
// a fixed description instead of serializing those objects.
export function getSafeDiagnosticError(cause: unknown): Error {
  const original =
    cause instanceof Error || typeof cause === "string"
      ? normalizeException(cause)
      : new Error("Non-Error thrown value");

  const safe = new Error(getSafeErrorMessage(original.message));
  safe.name = getSafeErrorMessage(original.name);
  if (original.stack !== undefined) {
    safe.stack = [
      `${safe.name}: ${safe.message}`,
      ...original.stack
        .split("\n")
        .slice(1)
        .map((line) => getSafeErrorMessage(line)),
    ]
      .join("\n")
      .slice(0, 10_000);
  }

  return safe;
}

export function logDiagnosticError(
  cause: unknown,
  context?: DiagnosticContext,
): void {
  const safe = getSafeDiagnosticError(cause);

  const tags = getDiagnosticTags(context);
  if (tags === undefined) {
    console.error(safe);
  } else {
    console.error(safe, tags);
  }
}

function getSafeRequestPath(input: string): string {
  try {
    return new URL(input, "https://diagnostic.invalid").pathname;
  } catch {
    return "/invalid-request-path";
  }
}

function getSafeErrorMessage(message: string): string {
  return message
    .replaceAll(/(Bearer\s+)[^\s,;]+/giu, "$1[redacted]")
    .replaceAll(
      /([?&](?:access_token|api_key|code|key|password|secret|token)=)[^&\s]+/giu,
      "$1[redacted]",
    )
    .replaceAll(
      /\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/gu,
      "[token]",
    )
    .replaceAll(/https?:\/\/[^\s?#]+[^\s#]*/giu, (url) =>
      getSafeRequestPath(url),
    )
    .replaceAll(/\/[^\s"'?]+\?[^\s"'#]+/gu, (url) => getSafeRequestPath(url))
    .slice(0, 500);
}
