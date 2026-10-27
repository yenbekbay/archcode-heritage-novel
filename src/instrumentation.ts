// Type-only at every usage site below, so SWC elides it. The dynamic imports
// are gated on production, keeping `@sentry/nextjs` and its 20+
// `@opentelemetry/instrumentation-*` transitives out of the dev module graph.
import { env } from "#config/env.ts";
import {
  SENTRY_DATA_COLLECTION,
  logDiagnosticError,
  sanitizeSentryEvent,
} from "#lib/diagnostics.ts";
import type * as Sentry from "@sentry/nextjs";
import type { captureRequestError } from "@sentry/nextjs";

// The first call initializes Sentry. Later calls, including racing request
// errors, await the same promise.
let initPromise: Promise<typeof Sentry | null> | null = null;

function initSentry(): Promise<typeof Sentry | null> {
  initPromise ??= (async () => {
    const dsn = env.NEXT_PUBLIC_SENTRY_DSN;
    if (dsn === undefined) {
      return null;
    }

    const sentry = await import("@sentry/nextjs");
    sentry.init({
      beforeSend: sanitizeSentryEvent,
      dataCollection: SENTRY_DATA_COLLECTION,
      dsn,
      tracesSampleRate: 0,
    });
    return sentry;
  })();
  return initPromise;
}

export async function register() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  await initSentry();
}

export function onRequestError(
  ...args: Parameters<typeof captureRequestError>
): Promise<void> | void {
  // NOTE: Log before the SDK gate so missing Sentry configuration cannot hide
  // request failures from runtime logs. Never log request headers or bodies.
  logDiagnosticError(args[0], {
    operation: "http_request",
    path: args[1].path,
    stage: "request",
  });

  if (process.env.NODE_ENV !== "production") {
    return;
  }

  return captureRequestErrorWithSentry(args).catch(logDiagnosticError);
}

async function captureRequestErrorWithSentry(
  args: Parameters<typeof captureRequestError>,
): Promise<void> {
  const sentry = await initSentry();
  sentry?.captureRequestError(...args);
}
