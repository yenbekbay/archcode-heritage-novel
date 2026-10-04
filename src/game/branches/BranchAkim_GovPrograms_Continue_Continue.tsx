import {
  bgBusStop4Jpg,
  bgBusStop5Jpg,
  bgBusStop6Jpg,
} from "#assets/game/index.ts";
import { GameOverMenu, GameOverTitle } from "#game/commands/index.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene } from "react-visual-novel";

export function BranchAkim_GovPrograms_Continue_Continue() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg.src} audio={SCENE_AUDIO.city} />
      <Scene src={bgBusStop5Jpg.src} audio={SCENE_AUDIO.city} />
      <Say>Вы успешно демонтировали остановку</Say>
      <Scene src={bgBusStop6Jpg.src} audio={SCENE_AUDIO.calmLoop} />
      <Say>Советские остановки исчезли по всему городу…</Say>
      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  );
}
