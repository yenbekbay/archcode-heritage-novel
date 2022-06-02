import {bgMayorDeskAJpg} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_Menu_Projects() {
  return (
    <Branch.Root background={bgMayorDeskAJpg}>
      <Branch.Say scheme="dark" transitory durationMs={0} lingers={1}>
        Выберите проект
      </Branch.Say>

      <Branch.Choices
        choices={[
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
        ]}
      />
    </Branch.Root>
  )
}
