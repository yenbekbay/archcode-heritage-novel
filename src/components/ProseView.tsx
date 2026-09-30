import type { ComponentPropsWithRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import styles from "./ProseView.module.css";

const proseStyles = tv({
  base: [
    styles["root"],
    "max-w-[65ch] text-pretty",
    "[&_:where(h1,h2,h3,strong,blockquote)]:text-gray-900",
    "[&_:where(a:not(.action-button))]:text-gray-900",
    "[&_:where(li)]:marker:font-normal [&_:where(li)]:marker:text-gray-500",
    "[&_:where(blockquote)]:border-gray-200",
  ],
  variants: {
    size: {
      default: "text-base/[1.5]",
      compact: [styles["compact"], "text-sm/[1.5]"],
    },
    tone: {
      default: "text-gray-700",
      invert: [
        "text-content-invert/80",
        "[&_:where(h1,h2,h3,strong,blockquote)]:text-content-invert",
        "[&_:where(a:not(.action-button))]:text-content-invert",
        "[&_:where(li)]:marker:text-content-invert",
        "[&_:where(blockquote)]:border-content-invert/20",
      ],
    },
  },
  defaultVariants: { size: "default", tone: "default" },
});

export function ProseView(
  props: ComponentPropsWithRef<"div"> & VariantProps<typeof proseStyles>,
) {
  const { size, tone, ...viewProps } = props;

  return (
    <div
      {...viewProps}
      className={proseStyles({ size, tone, className: props.className })}
    />
  );
}

// Paper cards keep their article semantics with the same reading contract.
export function ProseArticle(
  props: ComponentPropsWithRef<"article"> & VariantProps<typeof proseStyles>,
) {
  const { size, tone, ...articleProps } = props;

  return (
    <article
      {...articleProps}
      className={proseStyles({ size, tone, className: props.className })}
    />
  );
}
