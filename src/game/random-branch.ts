import type { BranchId } from "./runtime.ts";

export function getRandomBranch(
  options: readonly [BranchId, ...BranchId[]],
): BranchId {
  const index = Math.floor(Math.random() * options.length);
  return options[index] ?? options[0];
}
