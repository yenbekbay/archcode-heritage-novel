import { useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type SavedLink = {
  href: string;
  name: string;
};

// NOTE: Keep this key and representation compatible with existing browsers.
export const savedLinksAtom = atomWithStorage<SavedLink[]>(
  "@App/savedLinks",
  [],
);

export function useSavedLinks() {
  return useAtomValue(savedLinksAtom);
}
