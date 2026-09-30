"use client";

import { useMeasure } from "@react-hookz/web";
import type { HTMLMotionProps } from "framer-motion";
import React from "react";
import { ReactRough, Rectangle } from "react-rough";
import { twMerge } from "tailwind-merge";
import { Reveal } from "./Reveal";

export type RoughCardProps = {
  contentClassName?: string;
} & Omit<HTMLMotionProps<"div">, "children"> & {
    children?: React.ReactNode;
  };

export function RoughCard(props: RoughCardProps) {
  const { children, className, contentClassName, ...restProps } = props;

  return (
    <Reveal {...restProps} className={twMerge("relative shadow-lg", className)}>
      <RoughCardBackground />

      <article
        className={twMerge(
          "prose relative z-10 overflow-hidden p-8",
          contentClassName,
        )}
      >
        {children}
      </article>
    </Reveal>
  );
}

function RoughCardBackground() {
  const [containerRect, containerRef] = useMeasure<HTMLDivElement>();

  return (
    <div ref={containerRef} className="absolute inset-0">
      {containerRect && (
        // @ts-expect-error The library renders children but omits them from its props declaration.
        <ReactRough
          width={containerRect.width}
          height={containerRect.height}
          renderer="svg"
        >
          <Rectangle
            x={0}
            y={0}
            width={containerRect.width}
            height={containerRect.height}
            fill="#F7F4DC"
            fillStyle="solid"
            strokeWidth={2}
            roughness={2}
          />
        </ReactRough>
      )}
    </div>
  );
}
