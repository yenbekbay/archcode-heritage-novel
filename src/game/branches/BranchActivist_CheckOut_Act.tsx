import { bgZheltoksanBeforeFenceJpg, redhead8Png } from "#assets/game/index.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene } from "react-visual-novel";

export function BranchActivist_CheckOut_Act() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeFenceJpg.src} audio={SCENE_AUDIO.city} />

      <Say
        image={{ uri: redhead8Png.src, align: "bottom" }}
        menu={[
          {
            label: "Разберусь сама",
            onClick: (ctx) => {
              ctx.goToBranch("Activist_CheckOut_Act_Self");
            },
          },
          {
            label: "Объединиться в команду",
            onClick: (ctx) => {
              ctx.goToBranch("Activist_CheckOut_Act_Group");
            },
          },
          {
            label: "Обратиться в организации",
            onClick: (ctx) => {
              ctx.goToBranch("Activist_CheckOut_Act_Org");
            },
          },
        ]}
      >
        Что я могу?
      </Say>
    </Branch>
  );
}
