import "#__generated__/main.css";

import { RootProviders } from "#components/RootProviders.tsx";
import { buildRootMetadata } from "#lib/metadata.ts";
import type { Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import type { ReactNode } from "react";

const ibmPlexMono = localFont({
  src: [
    {
      path: "../../public/fonts/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBMPlexMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/IBMPlexMono-Medium.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IBMPlexMono-MediumItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-ibm-plex-mono",
});

const calligraph = localFont({
  src: "../../public/fonts/calligraph.woff2",
  display: "block",
  adjustFontFallback: false,
  variable: "--font-calligraph",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// NOTE: Metadata stays static. `proxy.ts` prevents non-canonical request hosts
// from being indexed through a response directive.
export const metadata = buildRootMetadata({ isIndexable: true });

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${ibmPlexMono.variable} ${calligraph.variable}`}
    >
      <body>
        <RootProviders>{props.children}</RootProviders>

        <Script
          data-goatcounter="https://archcode-heritage-novel.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
