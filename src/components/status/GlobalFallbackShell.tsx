import type { ReactNode } from "react";

// NOTE: Root fallbacks and the unsupported-browser notice render without
// `globals.css`. The values restate the website background and ink from
// `src/styles/globals.css` as hex, because these pages must also render in
// browsers without `oklch()` support.
export const GLOBAL_FALLBACK_STYLES = `
  *, ::before, ::after {
    box-sizing: border-box;
  }
  html {
    background: #ffffff;
    color: #0a0a0a;
    font-size: 16px;
  }
  body {
    min-height: 100dvh;
    margin: 0;
    padding: 6rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    font-family: ui-sans-serif, system-ui, sans-serif;
    line-height: 1.5;
    text-wrap: pretty;
  }
  h1, p {
    margin: 0;
  }
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.1;
    text-align: center;
  }
  [data-copy], [data-actions] {
    display: flex;
    width: min(100%, 65ch);
    flex-direction: column;
    gap: 1rem;
  }
  [data-actions] {
    flex-direction: row;
    flex-wrap: wrap;
  }
  a, button {
    min-height: 44px;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    text-decoration: underline;
  }
  a:focus-visible, button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

// Shared composition for routes that render without the website stylesheet.
// Callers choose one locale or present every supported language when no
// locale context exists.
export function GlobalFallbackShell(props: {
  action: ReactNode;
  children: ReactNode;
  title: ReactNode;
}) {
  return (
    <>
      <h1>{props.title}</h1>
      <div data-copy>{props.children}</div>
      <div data-actions>{props.action}</div>
    </>
  );
}
