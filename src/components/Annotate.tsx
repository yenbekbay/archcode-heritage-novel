"use client";

import { Slot } from "@radix-ui/react-slot";
import { useInView } from "framer-motion";
import { useEffect, useRef, type ComponentPropsWithRef } from "react";
import { mergeRefs } from "react-merge-refs";
import { annotate } from "rough-notation";
import type { RoughAnnotationConfig } from "rough-notation/lib/model";

export type AnnotateProps = {
  asChild?: boolean;
  config?: RoughAnnotationConfig;
} & ComponentPropsWithRef<"span">;

export function Annotate(props: AnnotateProps) {
  const { asChild, config, ref, ...restProps } = props;

  const internalRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(internalRef, { once: true });

  const Component = asChild === true ? Slot : "span";

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let annotation: ReturnType<typeof annotate> | undefined;

    const timeout = setTimeout(() => {
      if (internalRef.current !== null) {
        annotation = annotate(internalRef.current, {
          color: "#C1B12C",
          type: "underline",
          ...config,
        });
        annotation.show();
      }
    }, SHOW_DELAY_MS);

    // NOTE: Activity hides routes without discarding state. Remove the SVG
    // and timer while hidden, then recreate them when the route is visible.
    return () => {
      clearTimeout(timeout);
      annotation?.remove();
    };
  }, [isInView, config]);

  return <Component {...restProps} ref={mergeRefs([internalRef, ref])} />;
}

const SHOW_DELAY_MS = 1000;
