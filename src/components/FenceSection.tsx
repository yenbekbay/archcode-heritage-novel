import {
  fenceBottomPng,
  fenceMiddlePng,
  fenceTopPng,
} from "#assets/www/index.ts";
import { Image } from "#components/Image.tsx";
import React from "react";

export type FenceSectionProps = {
  children: React.ReactNode;
};

export function FenceSection({ children }: FenceSectionProps) {
  return (
    <section className="relative flex flex-col pb-[26rem] pt-28">
      <div className="absolute inset-0 ml-[-10%] flex w-[120%] flex-col">
        <Image
          src={fenceTopPng}
          sizes="120vw"
          alt=""
          eager
          className="w-full"
        />

        <div
          className="flex-1 bg-[length:100%_auto] bg-[center_top] bg-repeat-y"
          style={{ backgroundImage: `url(${fenceMiddlePng.src})` }}
        />

        <Image
          src={fenceBottomPng}
          sizes="120vw"
          alt=""
          eager
          className="-mb-4 w-full"
        />
      </div>

      {children}
    </section>
  );
}
