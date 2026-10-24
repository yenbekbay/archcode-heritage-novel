import { extendTailwindMerge } from "tailwind-merge";
import { createTV } from "tailwind-variants";

// `globals.css` adds theme names outside Tailwind's own scales.
// tailwind-merge only collapses conflicting classes it can place on a scale,
// so an unregistered name survives an override (`rounded-control rounded-none` kept both).
// Register a name here when `@theme` adds one.
const tailwindMergeConfig = {
  extend: {
    theme: {
      radius: ["control"],
      animate: ["bounce-gentle", "navigation-enter", "navigation-exit"],
    },
  },
};

export const twMerge = extendTailwindMerge(tailwindMergeConfig);

export const tv = createTV({
  twMergeConfig: tailwindMergeConfig,
});
