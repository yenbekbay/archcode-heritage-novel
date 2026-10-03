import React from "react";
import { twMerge } from "tailwind-merge";
import { ProseView } from "./ProseView.tsx";
import { Reveal } from "./Reveal.tsx";

export type HeroProps = {
  title: string;
  image?: React.ReactNode;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<typeof Reveal>, "title" | "children">;

export function Hero({
  title,
  image,
  children,
  className,
  ...restProps
}: HeroProps) {
  return (
    <Reveal
      className={twMerge(
        "container grid grid-flow-row gap-8 p-8 pb-16 lg:grid-flow-col lg:justify-items-start",
        className,
      )}
      {...restProps}
    >
      <ProseView
        tone="invert"
        className="flex flex-col gap-y-4 [&>h1]:[margin-block-end:0] [&>h1]:pb-2"
      >
        <h1>{title}</h1>
        {children}
      </ProseView>

      {image}
    </Reveal>
  );
}
