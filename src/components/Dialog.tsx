"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import React from "react";

export type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;

export function Dialog(props: DialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay asChild forceMount>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 100,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
            exit={{
              opacity: 0,
              transition: { ease: "easeIn", duration: 0.2 },
            }}
            className="fixed inset-0 z-[1000] bg-black/30"
          />
        </DialogPrimitive.Overlay>

        <DialogPrimitive.Content asChild forceMount>
          <motion.div
            initial={{ opacity: 0, x: "-50%", y: "-50%", scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { ease: "easeIn", duration: 0.2 },
            }}
            className="fixed left-1/2 top-1/2 z-[1010] flex max-h-[95vh] w-[95vw] max-w-md flex-col space-y-4 rounded-lg bg-base-100 p-4 md:w-full"
          >
            {props.children}
          </motion.div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

Dialog.Close = DialogPrimitive.Close;
Dialog.Description = DialogPrimitive.Description;
Dialog.Title = DialogPrimitive.Title;
Dialog.Trigger = DialogPrimitive.Trigger;
