import {
  bgCityHallConferenceRoomJpg,
  letterPng,
  mayor6Png,
  stampRejectedPng,
} from "#assets/game/index.ts";
import { destinations } from "#game/destinations.ts";
import { Menu, Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene, Show } from "react-visual-novel";

export function BranchDeveloper_ProjZheltoksan_Demolish_IgnoreRisks_Rejected() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show
        src={{
          uri: letterPng.src,
          style: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
            backgroundColor: "#e7dbab",
            transform: "scale(2.5)",
            transformOrigin: "50% 35%",
          },
        }}
        hide={1}
      />

      <Show
        src={{
          uri: stampRejectedPng.src,
          style: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
            transform: "translateY(-15%)",
          },
        }}
      />

      <Say
        tag={{ text: "Аким:", color: "#687065" }}
        image={{ uri: mayor6Png.src, align: "bottom" }}
      >
        —Я возмущён! Ведь здание представляет историческую ценность для города.
        Вам придётся разрабатывать новый проект и сохранить Желтоксан 115
      </Say>

      <Menu
        choices={[
          {
            label: "Дальше",
            onClick: (ctx) => {
              ctx.goToLocation(destinations.zheltoksanPreservationResume);
            },
          },
        ]}
      />
    </Branch>
  );
}
