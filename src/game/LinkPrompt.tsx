import { ProseView } from "#components/ProseView.tsx";
import { Dialog, LinkCard } from "#components/index.ts";
import { Button } from "#components/ui/Button.tsx";
import { AnimatePresence } from "framer-motion";
import { useSetAtom } from "jotai";
import { X as XIcon } from "phosphor-react";
import { toast } from "react-hot-toast";
import { uniqBy } from "remeda";
import { savedLinksAtom, type SavedLink } from "./saved-links.ts";
import { playSound } from "./sounds.ts";

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
          isOpen
          aria-label="Внешняя ссылка"
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              onClose();
            }
          }}
        >
          <Button
            variant="ghost"
            isIconOnly
            aria-label="Закрыть диалог"
            onHoverStart={() => {
              playSound("mouseover");
            }}
            onPress={() => {
              playSound("click");
              onClose();
            }}
            className="bg-white text-xl shadow-md hover:bg-chicago-50"
          >
            <XIcon />
          </Button>

          <div className="flex flex-col gap-4 overflow-auto">
            <ProseView className="shrink-0">
              <LinkCard
                url={link.href}
                size="sm"
                className="overflow-hidden rounded-md border border-content"
              />
            </ProseView>

            <div className="flex w-fit [&>button:first-child]:rounded-r-none [&>button:last-child]:rounded-l-none [&>button:last-child]:border-l-0">
              <Button
                variant="outline"
                onHoverStart={() => {
                  playSound("mouseover");
                }}
                onPress={() => {
                  playSound("click");
                  window.open(link.href, "_blank");
                  onClose();
                }}
              >
                Читать сейчас
              </Button>

              <Button
                onHoverStart={() => {
                  playSound("mouseover");
                }}
                onPress={() => {
                  playSound("click");
                  setSavedLinks((prev) =>
                    uniqBy([...prev, link], (l) => l.href),
                  );
                  toast.success("Ссылка сохранена");
                  onClose();
                }}
                className="border-content hover:border-content"
              >
                Сохранить
              </Button>
            </div>

            <ProseView size="compact">
              <blockquote>
                Доступ к сохранённым ссылкам можно получить в конце игры.
              </blockquote>
            </ProseView>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
