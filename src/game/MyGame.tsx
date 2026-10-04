import * as assets from "#assets/game/index.ts";
import { ProseView } from "#components/ProseView.tsx";
import { buildHomeHref } from "#lib/routes.ts";
import { useRouter } from "next/navigation";
import React from "react";
import { prepareBranches } from "react-visual-novel";
import * as _branches from "./branches/index.ts";
import { LinkPrompt } from "./LinkPrompt.tsx";
import { MobileDeviceChrome } from "./MobileDeviceChrome.tsx";
import { Game } from "./runtime.ts";
import type { SavedLink } from "./saved-links.ts";
import { playSound } from "./sounds.ts";

const branches = prepareBranches(_branches);

export default function MyGame() {
  const router = useRouter();

  const [activeLink, setActiveLink] = React.useState<SavedLink | null>(null);

  return (
    <>
      <MobileDeviceChrome>
        <Game
          assets={assets}
          branches={branches}
          initialBranchId="Intro"
          onLinkClick={(href, name, event) => {
            if (href.startsWith("http")) {
              event.preventDefault();
              setActiveLink({ href, name });
            } else {
              // noop
            }
          }}
          onPlaySound={playSound}
          onGoHome={() => {
            router.push(buildHomeHref());
          }}
        >
          {(render, res, progress) => {
            if (res.status === "loading") {
              return (
                <ProseView className="flex size-full max-w-none flex-col justify-center p-8">
                  <h1 className="text-center text-xl">Загрузка…</h1>

                  <progress
                    value={progress * 100}
                    max={100}
                    className="h-2 w-full appearance-none overflow-hidden rounded-control bg-chicago-50 text-content [&::-moz-progress-bar]:bg-content [&::-webkit-progress-bar]:bg-chicago-50 [&::-webkit-progress-value]:bg-content"
                  />
                </ProseView>
              );
            }
            if (res.status === "failure") {
              return (
                <ProseView className="flex size-full max-w-none flex-col justify-center p-8">
                  <h1 className="text-xl">Не удалось загрузить ресурсы</h1>

                  <pre className="rounded-control border border-error bg-error p-4 whitespace-pre-line text-black shadow-lg">
                    {res.error.message}
                  </pre>
                </ProseView>
              );
            }

            return <div className="flex size-full flex-col">{render()}</div>;
          }}
        </Game>
      </MobileDeviceChrome>

      <LinkPrompt
        link={activeLink}
        onClose={() => {
          setActiveLink(null);
        }}
      />
    </>
  );
}
