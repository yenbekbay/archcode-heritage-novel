"use client";

import type { ComponentPropsWithRef } from "react";
import {
  TextArea as RACTextArea,
  composeRenderProps,
} from "react-aria-components";
import { fieldStyles } from "./field-styles.ts";

export function TextArea(props: ComponentPropsWithRef<typeof RACTextArea>) {
  return (
    <RACTextArea
      {...props}
      className={composeRenderProps(props.className, (className) =>
        fieldStyles({ className }),
      )}
    />
  );
}
