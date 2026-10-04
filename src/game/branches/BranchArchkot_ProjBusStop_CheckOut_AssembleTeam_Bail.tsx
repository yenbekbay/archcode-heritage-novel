import {
  archbot1Png,
  archkot7Png,
  bgBusStop4Jpg,
  bgBusStop6Jpg,
} from "#assets/game/index.ts";
import { GameOverMenu, GameOverTitle } from "#game/commands/index.ts";
import { LINKS } from "#game/links.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene } from "react-visual-novel";

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_Bail() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg.src} audio={SCENE_AUDIO.city} />
      <Scene src={bgBusStop6Jpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Остановка изменена до неузнаваемости, и теперь это уже не имеет
        отношения к историко-культурному наследию
      </Say>

      <Say image={{ uri: archkot7Png.src, align: "bottom" }}>
        Была история, и нет истории. Зря Дядь Юра старался
      </Say>

      <Say
        tag={{ text: "АрхБот:", color: "#65506D" }}
        image={{ uri: archbot1Png.src, align: "bottom" }}
      >
        {`
          —А могло бы быть вот так:

          [Екатеринбург](${LINKS.reconstruction_examples_ekaterinburg})

          [Варшава](${LINKS.reconstruction_examples_warsaw})
        `}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  );
}
