import { bgProjectsFolderJpg } from "#assets/game/index.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene } from "react-visual-novel";

export function BranchAkim_Menu_Projects() {
  return (
    <Branch>
      <Scene src={bgProjectsFolderJpg.src} audio={SCENE_AUDIO.akimTheme} />

      <Say
        menu={[
          {
            label: "Желтоксан",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_ProjZheltoksan");
            },
          },
          {
            label: "Аэропорт",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_ProjAirport");
            },
          },
          {
            label: "АСК",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_ProjAsk");
            },
          },
        ]}
      >
        Выберите проект
      </Say>
    </Branch>
  );
}
