// Type-only at every usage site below, so SWC elides it. The dynamic imports
// are gated on production, keeping `@sentry/nextjs` out of the dev client
// bundle.
import { SUPPORTED_BROWSERS_UA_RE } from "#__generated__/browserslist.mjs";
import { env } from "#config/env.ts";
import {
  SENTRY_DATA_COLLECTION,
  logDiagnosticError,
  sanitizeSentryEvent,
} from "#lib/diagnostics.ts";
import type * as Sentry from "@sentry/nextjs";
import type { captureRouterTransitionStart } from "@sentry/nextjs";

// Shared init promise: the bootstrap call primes it; any router-transition
// callback racing before init resolves awaits the same promise.
let initPromise: Promise<typeof Sentry | null> | null = null;

function initSentry(): Promise<typeof Sentry | null> {
  initPromise ??= (async () => {
    const dsn = env.NEXT_PUBLIC_SENTRY_DSN;
    if (dsn === undefined) {
      return null;
    }

    // NOTE: Server HTML hydrates the full website before `BrowserSupportGate`
    // shows the browser-update notice, so a browser outside `.browserslistrc`
    // can throw on newer built-ins during that hydration. React recovers into
    // the notice, which is the supported outcome for those browsers.
    if (!SUPPORTED_BROWSERS_UA_RE.test(navigator.userAgent)) {
      return null;
    }

    const sentry = await import("@sentry/nextjs");
    sentry.init({
      beforeSend: sanitizeSentryEvent,
      dataCollection: SENTRY_DATA_COLLECTION,
      dsn,
      integrations: [
        // Tags events whose stack holds only browser extension or injected
        // script frames. Switch to a drop behaviour once the tag shows no
        // false positives.
        sentry.thirdPartyErrorFilterIntegration({
          behaviour: "apply-tag-if-exclusively-contains-third-party-frames",
          filterKeys: ["archcode-heritage-novel"],
        }),
      ],
      tracesSampleRate: 0,
    });
    return sentry;
  })();
  return initPromise;
}

if (process.env.NODE_ENV === "production") {
  void initSentry().catch(logDiagnosticError);
}

export function onRouterTransitionStart(
  ...args: Parameters<typeof captureRouterTransitionStart>
): ReturnType<typeof captureRouterTransitionStart> {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  void forwardRouterTransition(args).catch(logDiagnosticError);
}

async function forwardRouterTransition(
  args: Parameters<typeof captureRouterTransitionStart>,
): Promise<void> {
  const sentry = await initSentry();
  sentry?.captureRouterTransitionStart(...args);
}
