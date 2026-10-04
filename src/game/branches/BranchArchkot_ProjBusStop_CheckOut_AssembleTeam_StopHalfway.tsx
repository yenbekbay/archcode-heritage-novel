import { bgBusStop1Jpg } from "#assets/game/index.ts";
import { GameOverMenu, GameOverTitle } from "#game/commands/index.ts";
import { LINKS } from "#game/links.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene } from "react-visual-novel";

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_StopHalfway() {
  return (
    <Branch>
      <Scene src={bgBusStop1Jpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        {`
          Объект сохранен, но так и не стал памятником историко-культурного наследия

          [Статья о том, как это происходило](${LINKS.article_bus_stop_restoration})

          [Пост в Инстаграме](${LINKS.instagram_post_bus_stop_restoration})
        `}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  );
}
