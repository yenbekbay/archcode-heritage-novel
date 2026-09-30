"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithRef, ReactNode } from "react";
import {
  Modal,
  ModalOverlay,
  Dialog as RACDialog,
} from "react-aria-components";

const MotionModalOverlay = motion.create(ModalOverlay);
const MotionModal = motion.create(Modal);

export function Dialog(
  props: Pick<
    ComponentPropsWithRef<typeof ModalOverlay>,
    "isOpen" | "onOpenChange"
  > & {
    "children": ReactNode;
    "aria-label": string;
  },
) {
  return (
    <MotionModalOverlay
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      isDismissable
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeOut", duration: 0.3 } }}
      exit={{ opacity: 0, transition: { ease: "easeIn", duration: 0.2 } }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30"
    >
      <MotionModal
        initial={{ scale: 0.95 }}
        animate={{ scale: 1, transition: { ease: "easeOut", duration: 0.3 } }}
        exit={{ scale: 0.95, transition: { ease: "easeIn", duration: 0.2 } }}
      >
        <RACDialog
          aria-label={props["aria-label"]}
          className="flex max-h-[95dvh] w-[95vw] max-w-md flex-col gap-4 rounded-lg bg-white p-4 outline-hidden md:w-md"
        >
          {props.children}
        </RACDialog>
      </MotionModal>
    </MotionModalOverlay>
  );
}
