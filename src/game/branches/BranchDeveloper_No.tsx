import {
  bgDeveloperHqInsideJpg,
  developerRepB9Png,
} from "#assets/game/index.ts";
import { destinations } from "#game/destinations.ts";
import { Menu } from "#game/runtime.ts";
import { SCENE_AUDIO } from "#game/sounds.ts";
import { Branch, Scene, Show } from "react-visual-novel";

export function BranchDeveloper_No() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.indoor} />
      <Show src={{ uri: developerRepB9Png.src, align: "bottom" }} hide={1} />

      <Menu
        choices={[
          {
            label: "Вернуться к выбору",
            onClick: (ctx) => {
              ctx.goToLocation(destinations.roleSelection);
            },
          },
        ]}
      />
    </Branch>
  );
}
