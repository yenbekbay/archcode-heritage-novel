import {
  bgCityHallConferenceRoomJpg,
  mayor1Png,
  mayor4Png,
  portalPaperPng,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAirport() {
  return (
    <Branch.Root background={bgCityHallConferenceRoomJpg}>
      <Branch.Blank durationMs={3000} transitory />

      <Branch.Foreground
        src={portalPaperPng}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={3000}
      />

      <Branch.Say
        foregroundSrc={mayor1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Указания сверху: одобрить перенос VIP терминала аэоропрта безоговорочно
      </Branch.Say>

      <Branch.Say
        foregroundSrc={mayor4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        и так, согласование переноса…
      </Branch.Say>

      <Branch.Choices
        scheme="dark"
        choices={[
          {
            label: 'Нужна экспертиза',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAirport_Examine'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAirport_Approve'),
          },
        ]}
      />
    </Branch.Root>
  )
}
