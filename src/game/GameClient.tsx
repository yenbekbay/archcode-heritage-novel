"use client";

import dynamic from "next/dynamic";
import { QueryParamProvider } from "use-query-params";
import { GameQueryAdapter } from "./GameQueryAdapter.tsx";

const MyGame = dynamic(() => import("./MyGame.tsx"), {
  ssr: false,
  loading: GameLoading,
});

export function GameClient() {
  return (
    <QueryParamProvider adapter={GameQueryAdapter}>
      <MyGame />
    </QueryParamProvider>
  );
}

export function GameLoading() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <output>Загрузка игры…</output>
    </main>
  );
}
