"use client";

import NextAdapter from "next-query-params/app";
import dynamic from "next/dynamic";
import { QueryParamProvider } from "use-query-params";

const MyGame = dynamic(() => import("./MyGame"), {
  ssr: false,
  loading: GameLoading,
});

export function GameClient() {
  return (
    <QueryParamProvider adapter={NextAdapter}>
      <MyGame />
    </QueryParamProvider>
  );
}

export function GameLoading() {
  return (
    <main className="h-screen-safe flex items-center justify-center">
      <output>Загрузка игры…</output>
    </main>
  );
}
