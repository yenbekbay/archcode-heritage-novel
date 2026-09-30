"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const PreloadMyGameAssets = dynamic(
  () => import("#game/PreloadMyGameAssets.tsx"),
  { ssr: false },
);

export function WebsiteProviders(props: { children: ReactNode }) {
  return (
    <ParallaxProvider>
      {props.children}
      <PreloadMyGameAssets concurrency={10} />
    </ParallaxProvider>
  );
}
