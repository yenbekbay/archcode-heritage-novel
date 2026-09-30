import {
  bgCityHallConferenceRoomJpg,
  developerRepAPng,
  mayor2Png,
} from "#assets/game/index.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Say, Scene } from "react-visual-novel";

export function BranchAkim_ProjZheltoksan() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{ text: "Менеджер проекта:", color: "#A57B55" }}
        image={{ uri: developerRepAPng.src, align: "bottom" }}
      >
        —Добрый день, я — представитель Bay Shatyr Group. Представляю вашему
        вниманию проект KAISAR PLAZA
      </Say>

      <Say
        image={{ uri: mayor2Png.src, align: "bottom" }}
        menu={[
          {
            label: "Нужна экспертиза",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_ProjZheltoksan_Examine");
            },
          },
          {
            label: "Одобрить",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_ProjZheltoksan_Approve");
            },
          },
        ]}
      >
        —Хммм…
      </Say>
    </Branch>
  );
}
