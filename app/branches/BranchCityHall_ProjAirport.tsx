import {
  bgCityHallConferenceRoomJpg,
  mayor1Png,
  mayor4Png,
  portalPaperPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchCityHall_ProjAirport() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Show
        src={{
          uri: portalPaperPng,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}
      />

      <Say image={{uri: mayor1Png, align: 'bottom'}}>
        Указания сверху: одобрить перенос VIP терминала аэоропрта безоговорочно
      </Say>

      <Say
        image={{uri: mayor4Png, align: 'bottom'}}
        menu={[
          {
            label: 'Нужна экспертиза',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAirport_Examine'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAirport_Approve'),
          },
        ]}>
        и так, согласование переноса…
      </Say>
    </Branch>
  )
}
