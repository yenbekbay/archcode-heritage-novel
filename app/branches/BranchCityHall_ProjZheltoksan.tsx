import {
  bgCityHallConferenceRoomJpg,
  developerRepPng,
  mayor2Png,
} from '~/assets/game'
import {makeBranch} from '~/lib'

const Branch = makeBranch()

export function BranchCityHall_ProjZheltoksan() {
  return (
    <Branch.Container background={bgCityHallConferenceRoomJpg}>
      <Branch.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Добрый день, я - представитель Bay Shatyr Group. Представляю вашему
        внимаюпроект KAISAR PLAZA
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Хммм…
      </Branch.Say>

      <Branch.Choices
        variant="dark"
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
    </Branch.Container>
  )
}
