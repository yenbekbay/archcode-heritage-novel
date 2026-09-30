import { Dialog, LinkCard } from "#components/index.ts";
import { AnimatePresence } from "framer-motion";
import { useSetAtom } from "jotai";
import { X as XIcon } from "phosphor-react";
import { toast } from "react-hot-toast";
import { uniqBy } from "remeda";
import { savedLinksAtom, type SavedLink } from "./saved-links";
import { playSound } from "./sounds";

export type LinkPromptProps = {
  link: SavedLink | null;
  onClose: () => void;
};

export function LinkPrompt({ link, onClose }: LinkPromptProps) {
  const setSavedLinks = useSetAtom(savedLinksAtom);

  return (
    <AnimatePresence>
      {link && (
        <Dialog
          open
          onOpenChange={(newOpen) => {
            if (!newOpen) {
              onClose();
            }
          }}
        >
          <Dialog.Close asChild>
            <button
              onMouseEnter={() => {
                playSound("mouseover");
              }}
              onClick={() => {
                playSound("click");
              }}
              className="action-button action-circle bg-white text-xl shadow-md action-ghost hover:bg-chicago-50"
            >
              <XIcon />
            </button>
          </Dialog.Close>

          <div className="flex flex-col gap-y-4 overflow-auto">
            <LinkCard
              url={link.href}
              size="sm"
              className="prose shrink-0 overflow-hidden rounded-md border border-content"
            />

            <div className="flex w-fit [&>button:first-child]:rounded-r-none [&>button:last-child]:rounded-l-none [&>button:last-child]:border-l-0">
              <Dialog.Close
                onMouseEnter={() => {
                  playSound("mouseover");
                }}
                onClick={() => {
                  playSound("click");
                  window.open(link.href, "_blank");
                }}
                className="action-button action-outline"
              >
                Читать сейчас
              </Dialog.Close>

              <Dialog.Close
                onMouseEnter={() => {
                  playSound("mouseover");
                }}
                onClick={() => {
                  playSound("click");
                  setSavedLinks((prev) =>
                    uniqBy([...prev, link], (l) => l.href),
                  );
                  toast.success("Ссылка сохранена");
                }}
                className="action-button border-content hover:border-content"
              >
                Сохранить
              </Dialog.Close>
            </div>

            <div className="prose prose-sm">
              <blockquote>
                Доступ к сохранённым ссылкам можно получить в конце игры.
              </blockquote>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
