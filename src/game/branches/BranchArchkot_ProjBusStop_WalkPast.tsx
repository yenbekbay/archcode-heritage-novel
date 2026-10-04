import {
  archbot1Png,
  archkot6Png,
  archkot7Png,
  bgBusStop1Jpg,
  bgBusStop4Jpg,
  bgBusStop6Jpg,
  fenceMp3,
  fencePng,
} from "#assets/game/index.ts";
import { GameOverMenu, GameOverTitle } from "#game/commands/index.ts";
import { LINKS } from "#game/links.ts";
import { Say } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene, Show } from "react-visual-novel";

export function BranchArchkot_ProjBusStop_WalkPast() {
  return (
    <Branch>
      <Show
        src={{
          uri: fencePng.src,
          style: { height: "100%", transform: "translate(-50%) scale(1.15)" },
          animation: {
            initial: {},
            entrance: {},
            exit: { x: "-400%", transition: { duration: 2 } },
          },
        }}
        audio={{
          ...SCENE_AUDIO.city,
          onExit: fenceMp3,
        }}
        hide={1}
        zIndex={100}
      />

      <Say
        image={{
          uri: archkot6Png.src,
          align: "bottom",
          style: { filter: "drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))" },
        }}
        zIndex={101}
      >
        Не стоит зря терять времени, дедлайны горят, дома кот некормленный, да
        сериал недосмотренный
      </Say>

      <Scene src={bgBusStop1Jpg.src} audio={SCENE_AUDIO.city} />
      <Say>За забором была автобусная остановка «Казмеханобр»</Say>
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
