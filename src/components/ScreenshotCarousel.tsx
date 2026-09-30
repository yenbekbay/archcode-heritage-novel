"use client";

import {
  screenshot1Png,
  screenshot2Png,
  screenshot3Png,
  screenshot4Png,
  screenshot5Png,
  screenshot6Png,
} from "#assets/www/index.ts";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin as createWheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import { Reveal } from "./Reveal";

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
            <Image src={data} alt="" />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
