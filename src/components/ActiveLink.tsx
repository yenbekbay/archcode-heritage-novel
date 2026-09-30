"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithRef } from "react";

export function ActiveLink(
  props: ComponentPropsWithRef<typeof Link> & {
    href: string;
  },
) {
  const pathname = usePathname();

  const isExactActive = pathname === props.href;

  const isActive =
    isExactActive ||
    (props.href !== "/" && pathname.startsWith(`${props.href}/`));

  return (
    <Link
      {...props}
      data-link-active={isActive || undefined}
      data-link-exact-active={isExactActive || undefined}
      aria-current={isExactActive ? "page" : undefined}
    />
  );
}
