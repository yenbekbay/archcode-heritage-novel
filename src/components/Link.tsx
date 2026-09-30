import NextLink from "next/link";
import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export function Link(props: ComponentPropsWithRef<typeof NextLink>) {
  return (
    <NextLink
      {...props}
      className={twMerge(
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        props.className,
      )}
    />
  );
}
