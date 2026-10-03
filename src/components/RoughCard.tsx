"use client";

import { useElementRect } from "#lib/use-element-rect.ts";
import type { HTMLMotionProps } from "framer-motion";
import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import { twMerge } from "tailwind-merge";
import { ProseArticle } from "./ProseView.tsx";
import { Reveal } from "./Reveal.tsx";

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

      <ProseArticle
        className={twMerge(
          "relative z-10 overflow-hidden p-8",
          contentClassName,
        )}
      >
        {children}
      </ProseArticle>
    </Reveal>
  );
}

function RoughCardBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRect = useElementRect(containerRef);

  const width = containerRect?.width;
  const height = containerRect?.height;

  useEffect(() => {
    const svg = svgRef.current;
    if (svg === null || width === undefined || height === undefined) {
      return;
    }

    const rectangle = rough.svg(svg).rectangle(0, 0, width, height, {
      fill: "#F7F4DC",
      fillStyle: "solid",
      strokeWidth: 2,
      roughness: 2,
    });

    svg.append(rectangle);

    return () => {
      rectangle.remove();
    };
  }, [width, height]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <svg ref={svgRef} className="size-full" aria-hidden="true" />
    </div>
  );
}
