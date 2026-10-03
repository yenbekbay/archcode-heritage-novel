"use client";

import { useEffect, useState, type RefObject } from "react";

export function useElementRect(ref: RefObject<HTMLElement | null>) {
  const [rect, setRect] = useState<DOMRectReadOnly | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (element === null) {
      return;
    }

    let frame: number | undefined;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry === undefined) {
        return;
      }

      if (frame !== undefined) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        setRect(entry.contentRect);
      });
    });

    // NOTE: Re-read the attached element whenever Activity reconnects effects.
    // Ref registration must not depend on a passive effect's mounted flag.
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame !== undefined) {
        cancelAnimationFrame(frame);
      }
    };
  }, [ref]);

  return rect;
}
