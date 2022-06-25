import {bgProjectsFolderJpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'

export function BranchDeveloper_Menu_Projects() {
  return (
    <Branch>
      <Scene src={bgProjectsFolderJpg} />

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
