import { bgZheltoksanBeforeJpg } from "#assets/game/index.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene } from "react-visual-novel";

export function BranchDeveloper_ProjZheltoksan_Demolish_IgnoreRisks_Approved_Silence() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say>
        Слушания подошли к концу, общественность не верит вашим словам, но
        теперь у нас собран целый альбом комментариев
      </Say>

      <Say
        menu={[
          {
            label: "Учесть мнения",
            onClick: (ctx) => {
              ctx.goToBranch(
                "Developer_ProjZheltoksan_Demolish_IgnoreRisks_Approved__Reconsider",
              );
            },
          },
          {
            label: "Продолжить стройку",
            onClick: (ctx) => {
              ctx.goToBranch(
                "Developer_ProjZheltoksan_Demolish_IgnoreRisks_Approved__Continue",
              );
            },
          },
        ]}
      >
        Что делать?
      </Say>
    </Branch>
  );
}
