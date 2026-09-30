import { bgZheltoksanBeforeJpg } from "#assets/game/index.ts";
import { GameOverMenu, GameOverTitle } from "#game/commands/index.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Say, Scene } from "react-visual-novel";

export function BranchAkim_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Listen() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Поздравляем! Вы защищаете наследие! К тому же, при дальнейшем внесении
        здания в список памятников, оно может стать активом
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  );
}
