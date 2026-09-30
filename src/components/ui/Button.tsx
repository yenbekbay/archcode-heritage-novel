"use client";

import type { ComponentPropsWithRef } from "react";
import { Button as RACButton, composeRenderProps } from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

const buttonStyles = tv({
  base: "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 pressed:translate-y-px",
  variants: {
    variant: {
      solid: "action-button",
      outline: "action-button action-outline",
      ghost: "action-button action-ghost",
      game: "game-button",
      game_opaque: "game-button game-button-opaque",
    },
    shape: {
      default: "",
      circle: "action-circle",
    },
  },
  defaultVariants: { variant: "solid", shape: "default" },
});

export function Button(
  props: ComponentPropsWithRef<typeof RACButton> &
    VariantProps<typeof buttonStyles>,
) {
  const { variant, shape, ...buttonProps } = props;

  return (
    <RACButton
      {...buttonProps}
      className={composeRenderProps(props.className, (className) =>
        buttonStyles({ variant, shape, className }),
      )}
    >
      {props.children}
    </RACButton>
  );
}
