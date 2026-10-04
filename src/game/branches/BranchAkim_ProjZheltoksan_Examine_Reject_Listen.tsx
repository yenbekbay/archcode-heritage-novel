import {
  bgCityHallConferenceRoomJpg,
  bgZheltoksanBeforeJpg,
  mayor3Png,
} from "#assets/game/index.ts";
import { GameOverMenu, GameOverTitle } from "#game/commands/index.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene } from "react-visual-novel";

export function BranchAkim_ProjZheltoksan_Examine_Reject_Listen() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{ uri: mayor3Png.src, align: "bottom" }}>
        Выявлен ряд нарушений! Девелопер должен пересмотреть проект
      </Say>

      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Поздравляем! Вы защищаете наследие! К тому же, при дальнейшем внесении
        здания в список памятников, оно может стать активом и привлекать людей
        исторической ценностью
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  );
}
