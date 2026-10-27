"use client";

import {
  GLOBAL_FALLBACK_STYLES,
  GlobalFallbackShell,
} from "#components/status/GlobalFallbackShell.tsx";
import { captureException } from "#lib/capture-exception.ts";
import { useEffect } from "react";

export default function GlobalErrorPage(props: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    captureException(props.error);
  }, [props.error]);

  return (
    <html lang="ru">
      <head>
        {/* No root layout or `globals.css` is available here. */}
        <style>{GLOBAL_FALLBACK_STYLES}</style>
      </head>

      <body>
        <GlobalFallbackShell
          title="500"
          action={
            <button type="button" onClick={props.retry}>
              Попробовать снова
            </button>
          }
        >
          <p>Произошла ошибка. Пожалуйста, попробуйте позже.</p>
        </GlobalFallbackShell>
      </body>
    </html>
  );
}
