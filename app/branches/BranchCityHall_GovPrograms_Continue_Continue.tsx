import {bgBusStop4Jpg, bgBusStop5Jpg, bgBusStop6Jpg} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_GovPrograms_Continue_Continue() {
  return (
    <Branch.Root background={bgBusStop4Jpg}>
      <Branch.Foreground
        src={bgBusStop5Jpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={2}
      />

      <Branch.Say transitory>Вы успешно демонтировали остановку</Branch.Say>

      <Branch.Foreground
        src={bgBusStop6Jpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Say transitory>
        Советские остановки исчезли по всему городу…
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
