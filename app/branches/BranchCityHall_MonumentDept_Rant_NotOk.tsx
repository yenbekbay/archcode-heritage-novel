import {
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  mayor13Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_MonumentDept_Rant_NotOk() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Say
        foregroundSrc={mayor13Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {'Хммм…\nЧто-то долго'}
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallOutsideJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Branch.Say transitory>
        Срок Акима прошел, комиссия так и не состоялась. Новый аким обнуляет все
        действия предыдущего. Все ваши предложения отменяются.
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
