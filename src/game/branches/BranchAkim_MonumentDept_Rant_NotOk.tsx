import {
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  mayor13Png,
} from "#assets/game/index.ts";
import { GameOverMenu, GameOverTitle } from "#game/commands/index.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene } from "react-visual-novel";

export function BranchAkim_MonumentDept_Rant_NotOk() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{ uri: mayor13Png.src, align: "bottom" }}>
        {`
          Хммм…
          Что-то долго
        `}
      </Say>

      <Scene src={bgCityHallOutsideJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Срок Акима прошел, комиссия так и не состоялась. Новый аким обнуляет все
        действия предыдущего. Все ваши предложения отменяются.
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  );
}
