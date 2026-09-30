"use client";

import type { StaticImageData } from "next/image";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { twMerge } from "tailwind-merge";

export type HeroBackgroundProps = {
  src?: string | StaticImageData;
  speed?: number;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<"div">;

export function HeroBackground({
  src,
  speed = -16,
  containerClassName,
  className,
  style,
  ...restProps
}: HeroBackgroundProps) {
  return (
    <div className={twMerge("absolute inset-0 -z-10", containerClassName)}>
      <ParallaxBanner
        layers={[
          {
            children: (
              <div
                className={twMerge("size-full", className)}
                style={{
                  backgroundImage: `url(${
                    typeof src === "object" ? src.src : src
                  })`,
                  ...style,
                }}
                {...restProps}
              />
            ),
            speed,
          },
        ]}
        className="h-full"
      />

      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
