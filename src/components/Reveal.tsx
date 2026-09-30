"use client";

import { Slot } from "@radix-ui/react-slot";
import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import { mergeRefs } from "react-merge-refs";

export type RevealProps = {
  asChild?: boolean;
} & HTMLMotionProps<"div">;

const MotionSlot = motion.create(Slot);

export function Reveal(props: RevealProps) {
  const { asChild, ref, ...restProps } = props;

  const internalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(internalRef, { once: true });

  const MotionComponent = asChild === true ? MotionSlot : motion.div;

  return (
    <MotionComponent
      {...restProps}
      ref={mergeRefs([internalRef, ref])}
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      initial="hidden"
    />
  );
}

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
};
