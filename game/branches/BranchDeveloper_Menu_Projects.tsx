import {bgProjectsFolderJpg} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_Menu_Projects() {
  return (
    <Branch>
      <Scene src={bgProjectsFolderJpg.src} audio={SCENE_AUDIO.developerTheme} />

      <Say
        scheme="dark"
        menu={[
          {
            label: 'Желтоксан',
            onClick: (ctx) => ctx.goToBranch('Developer_ProjZheltoksan'),
          },
          {
            label: 'Аэропорт',
            onClick: (ctx) => ctx.goToBranch('Developer_ProjAirport'),
          },
          {
            label: 'АСК',
            onClick: (ctx) => ctx.goToBranch('Developer_ProjAsk'),
          },
        ]}>
        Выберите проект
      </Say>
    </Branch>
  )
}
