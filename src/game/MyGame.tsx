import * as assets from "#assets/game/index.ts";
import { buildHomeHref } from "#lib/routes.ts";
import { useRouter } from "next/navigation";
import React from "react";
import { Game, prepareBranches } from "react-visual-novel";
import * as _branches from "./branches";
import { LinkPrompt } from "./LinkPrompt";
import { MobileDeviceChrome } from "./MobileDeviceChrome";
import type { SavedLink } from "./saved-links";
import { playSound } from "./sounds";

const branches = prepareBranches(_branches);

type MyBranches = typeof branches;

declare module "react-visual-novel" {
  // NOTE: The game library discovers branch IDs through declaration merging.
  // oxlint-disable-next-line typescript/consistent-type-definitions, typescript/no-empty-object-type -- Augment the library's branch registry without replacing its interface.
  interface Branches extends MyBranches {}
}

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
                <div className="prose flex size-full max-w-none flex-col justify-center p-8">
                  <h1 className="text-center text-xl">Загрузка…</h1>

                  <progress
                    value={progress * 100}
                    max={100}
                    className="h-2 w-full appearance-none overflow-hidden rounded-control bg-chicago-50 text-content [&::-moz-progress-bar]:bg-content [&::-webkit-progress-bar]:bg-chicago-50 [&::-webkit-progress-value]:bg-content"
                  />
                </div>
              );
            }
            if (res.status === "failure") {
              return (
                <div className="prose flex size-full max-w-none flex-col justify-center p-8">
                  <h1 className="text-xl">Не удалось загрузить ресурсы</h1>

                  <pre className="rounded-control border border-error bg-error p-4 whitespace-pre-line text-black shadow-lg">
                    {res.error.message}
                  </pre>
                </div>
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
