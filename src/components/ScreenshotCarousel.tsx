"use client";

import {
  screenshot1Png,
  screenshot2Png,
  screenshot3Png,
  screenshot4Png,
  screenshot5Png,
  screenshot6Png,
} from "#assets/www/index.ts";
import { Image } from "#components/Image.tsx";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin as createWheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { Reveal } from "./Reveal.tsx";

export function ScreenshotCarousel() {
  const [viewportRef] = useEmblaCarousel(
    { align: "start", loop: false, skipSnaps: true },
    [createWheelGesturesPlugin()],
  );

  return (
    <Reveal className="ScreenshotCarousel overflow-hidden" ref={viewportRef}>
      <div className="flex">
        {[
          screenshot1Png,
          screenshot2Png,
          screenshot3Png,
          screenshot4Png,
          screenshot5Png,
          screenshot6Png,
        ].map((data) => (
          <div
            key={data.src}
            className="relative w-4/5 flex-[0_0_auto] md:w-2/5 lg:w-[18%]"
          >
            <Image
              src={data}
              sizes="(min-width: 1024px) 18vw, (min-width: 768px) 40vw, 80vw"
              alt=""
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
