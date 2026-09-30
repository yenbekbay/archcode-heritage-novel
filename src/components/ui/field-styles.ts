import { tv } from "tailwind-variants";

export const fieldStyles = tv({
  base: "min-w-0 appearance-none rounded-md border border-gray-500 bg-white px-3 py-2 text-base/[1.5] text-content placeholder:text-gray-400 focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error",
});
