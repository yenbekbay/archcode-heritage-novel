"use client";

import { SUPPORTED_BROWSERS_UA_RE } from "#__generated__/browserslist.mjs";
import { useState, useSyncExternalStore, type ReactNode } from "react";
import {
  GLOBAL_FALLBACK_STYLES,
  GlobalFallbackShell,
} from "./GlobalFallbackShell.tsx";

// NOTE: Server HTML always renders the website, so a browser outside
// `.browserslistrc` hydrates it before this gate replaces it with the notice.
// The notice uses the root fallback stylesheet because the website stylesheet
// depends on CSS those browsers lack. The generated user-agent expression
// cannot recognize every browser, so a misidentified one can continue.
export function BrowserSupportGate(props: {
  children: ReactNode;
  copy: { title: string; message: string; continueLabel: string };
}) {
  const isSupportedBrowser = useSyncExternalStore(
    subscribeToBrowser,
    getBrowserSnapshot,
    getServerBrowserSnapshot,
  );

  const [isDismissed, setIsDismissed] = useState(false);

  if (isSupportedBrowser || isDismissed) {
    return props.children;
  }

  return (
    <>
      <style>{GLOBAL_FALLBACK_STYLES + NOTICE_REVEAL_STYLES}</style>

      <GlobalFallbackShell
        title={props.copy.title}
        action={
          <button
            type="button"
            onClick={() => {
              setIsDismissed(true);
            }}
          >
            {props.copy.continueLabel}
          </button>
        }
      >
        <p>{props.copy.message}</p>
      </GlobalFallbackShell>
    </>
  );
}

// NOTE: Website reveal effects that unhide the document after fonts load are
// inside the gated body, so the notice reveals the document itself.
const NOTICE_REVEAL_STYLES = `
  html, body {
    opacity: 1 !important;
    visibility: visible !important;
  }
`;

function subscribeToBrowser() {
  return () => undefined;
}

function getBrowserSnapshot() {
  return SUPPORTED_BROWSERS_UA_RE.test(navigator.userAgent);
}

function getServerBrowserSnapshot() {
  return true;
}
