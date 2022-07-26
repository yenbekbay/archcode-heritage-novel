import {bgProjectsFolderJpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_Menu_Projects() {
  return (
    <Branch>
      <Scene src={bgProjectsFolderJpg.src} audio={SCENE_AUDIO.akimTheme} />

      <Say
        menu={[
          {
            label: 'Желтоксан',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjZheltoksan'),
          },
          {
            label: 'Аэропорт',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjAirport'),
          },
          {
            label: 'АСК',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjAsk'),
          },
        ]}>
        Выберите проект
      </Say>
    </Branch>
  )
}
