import {bgCityHallMayorOfficeJpg, bgCityHallOutsideJpg} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_MonumentDept_Rant_Ok() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Foreground
        src={bgCityHallOutsideJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Branch.Say size="lg" transitory>
        Состоялась комиссия. ПОЗДРАВЛЯЕМ!!!
      </Branch.Say>

      <Branch.Say transitory>
        Здания внесены в список! Теперь они все — памятники и могут стать новым
        активом!
      </Branch.Say>

      <Branch.Title transitory lingers>
        Конец игры
      </Branch.Title>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch.Root>
  )
}
