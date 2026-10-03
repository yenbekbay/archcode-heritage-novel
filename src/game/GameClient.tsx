"use client";

import dynamic from "next/dynamic";

const MyGame = dynamic(() => import("./MyGame.tsx"), {
  ssr: false,
  loading: GameLoading,
});

export function GameClient() {
  return <MyGame />;
}

export function GameLoading() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <output>Загрузка игры…</output>
    </main>
  );
}
