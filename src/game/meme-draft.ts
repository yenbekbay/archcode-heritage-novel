import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { z } from "zod";

const jsonStorage = createJSONStorage();

const draftStorage = {
  ...jsonStorage,
  getItem: (key: string, initialValue: string | null) => {
    const value = jsonStorage.getItem(key, initialValue);
    return isMemeDraftValue(value) ? value : initialValue;
  },
  // oxlint-disable-next-line utilfirst/prefer-options-parameter -- Jotai fixes the storage subscription signature.
  subscribe: (
    key: string,
    onChange: (value: string | null) => void,
    initialValue: string | null,
  ) =>
    jsonStorage.subscribe?.(
      key,
      (value) => {
        onChange(isMemeDraftValue(value) ? value : initialValue);
      },
      initialValue,
    ),
};

// NOTE: Retain the Hookz JSON strings and keys used by existing browser drafts.
export const memeTemplateIdAtom = atomWithStorage<string | null>(
  "@MemeForm/activeTemplateId",
  null,
  draftStorage,
);

export const memePreviewUrlAtom = atomWithStorage<string | null>(
  "@MemeForm/previewUrl",
  null,
  draftStorage,
);

function isMemeDraftValue(value: unknown): value is string | null {
  return z.string().nullable().safeParse(value).success;
}
