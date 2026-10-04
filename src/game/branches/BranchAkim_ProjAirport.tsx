import {
  bgCityHallConferenceRoomJpg,
  mayor1Png,
  mayor4Png,
  portalPaperPng,
} from "#assets/game/index.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene, Show } from "react-visual-novel";

export function BranchAkim_ProjAirport() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show
        src={{
          uri: portalPaperPng.src,
          style: { height: "100%", width: "100%", objectFit: "cover" },
        }}
      />

      <Say image={{ uri: mayor1Png.src, align: "bottom" }}>
        Указания сверху: одобрить перенос VIP терминала аэоропрта безоговорочно
      </Say>

      <Say
        image={{ uri: mayor4Png.src, align: "bottom" }}
        menu={[
          {
            label: "Нужна экспертиза",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_ProjAirport_Examine");
            },
          },
          {
            label: "Одобрить",
            onClick: (ctx) => {
              ctx.goToBranch("Akim_ProjAirport_Approve");
            },
          },
        ]}
      >
        и так, согласование переноса…
      </Say>
    </Branch>
  );
}
