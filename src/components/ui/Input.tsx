"use client";

import type { ComponentPropsWithRef } from "react";
import { Input as RACInput, composeRenderProps } from "react-aria-components";
import { fieldStyles } from "./field-styles.ts";

export function Input(props: ComponentPropsWithRef<typeof RACInput>) {
  return (
    <RACInput
      {...props}
      className={composeRenderProps(props.className, (className) =>
        fieldStyles({ className }),
      )}
    />
  );
}
