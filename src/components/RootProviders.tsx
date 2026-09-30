"use client";

import { Provider } from "jotai";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export function RootProviders(props: { children: ReactNode }) {
  return (
    <Provider>
      {props.children}
      <Toaster />
    </Provider>
  );
}
