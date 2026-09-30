import { GameClient, GameLoading } from "#game/GameClient.tsx";
import { buildPageMetadata } from "#lib/metadata.ts";
import { Suspense } from "react";

export const metadata = buildPageMetadata({
  pathname: "/play",
  title: "Играть",
  description:
    "Пройдите визуальную новеллу об архитектурном наследии в роли Активиста, АрхКота, Девелопера или Акима.",
});

export default function PlayPage() {
  return (
    <Suspense fallback={<GameLoading />}>
      <GameClient />
    </Suspense>
  );
}
