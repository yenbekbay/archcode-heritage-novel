import {
  archkot2Png,
  archkot3Png,
  assistant1Png,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  mayor12Png,
  mayor14Png,
  mayor2Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_GovPrograms_Stop() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Foreground
        src={mayor12Png}
        style={{width: '100%', bottom: '-12%'}}
        transitory
        lingers={1}
      />

      <Branch.Say
        size="lg"
        scheme="dark"
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *тук-тук
      </Branch.Say>

      <Branch.Foreground
        src={bgMayorDoorwayJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={0}
        lingers={1}
      />

      <Branch.Say
        size="lg"
        scheme="dark"
        tag="Помощник:"
        foregroundSrc={assistant1Png}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory>
        —Общественность и Архкот хотят встретиться
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={mayor14Png}
        foregroundStyle={{width: '100%', bottom: '-12%'}}
        transitory>
        {'-Хммм…\nДавайте назначим встречу'}
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallConferenceRoomJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Say size="xl" transitory>
        Встреча с Архкотом
      </Branch.Say>

      <Branch.Say
        foregroundSrc={archkot2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        -Мы провели исследование темы и инвентаризацию советских остановок
      </Branch.Say>

      <Branch.Say
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        foregroundSrc={archkot3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {'-Вот карта остановок.\n*ССЫЛКА\n-Они должны охраняться государством!'}
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        -Я думаю…
      </Branch.Say>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Он прав!',
            onClick: (ctx) => ctx.goToBranch('CityHall_GovPrograms_Stop_Agree'),
          },
          {
            label: 'Бред какой-то',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_GovPrograms_Stop_Dismiss'),
          },
        ]}
      />
    </Branch.Root>
  )
}
