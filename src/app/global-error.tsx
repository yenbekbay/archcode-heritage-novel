"use client";

import { useEffect } from "react";

export default function GlobalErrorPage(props: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error("Root rendering failed", { digest: props.error.digest });
  }, [props.error.digest]);

  return (
    <html lang="ru">
      <body style={{ fontFamily: "monospace", padding: "2rem" }}>
        <h1>Что-то пошло не так!</h1>
        <p>Не удалось открыть страницу. Попробуйте еще раз.</p>

        <button type="button" onClick={props.retry}>
          Попробовать снова
        </button>
      </body>
    </html>
  );
}
