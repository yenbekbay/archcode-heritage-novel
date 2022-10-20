import {bgDeveloperHqInsideJpg, developerRepB9Png} from 'assets/game'
import {Branch, Menu, Scene, Show} from 'react-visual-novel'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_No() {
  return (
    <Branch>
      <Scene src={bgDeveloperHqInsideJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show src={{uri: developerRepB9Png.src, align: 'bottom'}} hide={1} />

      <Menu
        choices={[
          {
            label: 'Вернуться к выбору',
            onClick: (ctx) =>
              // HACK
              ctx.goToLocation('Intro', 13),
          },
        ]}
      />
    </Branch>
  )
}
