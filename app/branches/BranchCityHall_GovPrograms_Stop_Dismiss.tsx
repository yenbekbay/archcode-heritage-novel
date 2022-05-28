import {
  bgBusStop5Jpg,
  bgBusStop6Jpg,
  bgCityHallConferenceRoomJpg,
  mayor15Png,
  mayor3Png,
  mayor9Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_GovPrograms_Stop_Dismiss() {
  return (
    <Branch.Root background={bgCityHallConferenceRoomJpg}>
      <Branch.Say
        size="xl"
        foregroundSrc={mayor9Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Никакой ценности эти остановки не имеют!
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor15Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Все это-пережитки советского прошлого!
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Не одобрять проект!
      </Branch.Say>

      <Branch.Foreground
        src={bgBusStop5Jpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={2}
      />

      <Branch.Say size="lg" transitory>
        Вы успешно демонтировали остановку
      </Branch.Say>

      <Branch.Foreground
        src={bgBusStop6Jpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Say size="lg" transitory>
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
