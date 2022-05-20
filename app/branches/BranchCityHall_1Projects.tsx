import {bgMayorDeskAJpg} from '~/assets/game'
import {makeBranch} from '~/lib'

const Branch = makeBranch()

export function BranchCityHall_1Projects() {
  return (
    <Branch.Container background={bgMayorDeskAJpg}>
      <Branch.Say
        size="xl"
        variant="dark"
        transitory
        durationMs={0}
        lingers={1}>
        Выберите проект
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Желтоксан',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjZheltoksan'),
          },
        ]}
      />
    </Branch.Container>
  )
}
