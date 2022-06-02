import {
  bgCityHallConferenceRoomJpg,
  developerRepAPng,
  mayor2Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjZheltoksan() {
  return (
    <Branch.Root background={bgCityHallConferenceRoomJpg}>
      <Branch.Blank durationMs={3000} transitory />

      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepAPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Добрый день, я — представитель Bay Shatyr Group. Представляю вашему
        внимаюпроект KAISAR PLAZA
      </Branch.Say>

      <Branch.Say
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        —Хммм…
      </Branch.Say>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Нужна экспертиза',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjZheltoksan_Examine'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjZheltoksan_Approve'),
          },
        ]}
      />
    </Branch.Root>
  )
}
