import {
  bgCityHallMayorOfficeJpg,
  bgMonumentDeptDoorJpg,
  bgMonumentDeptDoorwayJpg,
  mayor1Png,
  mayor5Png,
  mayor6Png,
  monumentDeptStaff1Png,
  monumentDeptStaff2Png,
} from "#assets/game/index.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene, Show } from "react-visual-novel";

export function BranchAkim_Menu_MonumentDept() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{ uri: mayor1Png.src, align: "bottom" }}>
        Что у нас делает отдел памятников?
      </Say>

      <Scene src={bgMonumentDeptDoorJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{ uri: mayor5Png.src, align: "bottom" }}>
        Посмотрим, что они тут делают…
      </Say>

      <Scene src={bgMonumentDeptDoorwayJpg.src} audio={SCENE_AUDIO.indoor} />
      <Show src={{ uri: monumentDeptStaff1Png.src, align: "bottom" }} />
      <Show src={{ uri: monumentDeptStaff2Png.src, align: "bottom" }} />

      <Say
        image={{ uri: mayor6Png.src, align: "bottom" }}
        menu={[
          {
            label: "Чай!",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_MonumentDept_Tea");
            },
          },
          {
            label: "Навести порядок",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_MonumentDept_Rant");
            },
          },
        ]}
      >
        Я хочу…
      </Say>
    </Branch>
  );
}
