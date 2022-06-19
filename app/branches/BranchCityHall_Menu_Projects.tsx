import {bgProjectsFolderJpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchCityHall_Menu_Projects() {
  return (
    <Branch>
      <Scene src={bgProjectsFolderJpg} />

      <Say
        scheme="dark"
        menu={[
          {
            label: 'Желтоксан',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjZheltoksan'),
          },
          {
            label: 'Аэропорт',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAirport'),
          },
          {
            label: 'АСК',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAsk'),
          },
        ]}>
        Выберите проект
      </Say>
    </Branch>
  )
}
