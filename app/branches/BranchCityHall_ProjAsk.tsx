import {
  bgCityHallConferenceRoomJpg,
  developerRepAPng,
  mayor2Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchCityHall_ProjAsk() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say
        tag="Девелопер:"
        image={{uri: developerRepAPng, style: {width: '100%', bottom: 0}}}>
        —Добрый день, я — представитель Bay Shatyr Group. Представляю вашему
        внимаюпроект АСК
      </Say>

      <Say
        image={{uri: mayor2Png, style: {width: '100%', bottom: 0}}}
        menu={[
          {
            label: 'Нужна экспертиза',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAsk_Examine'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAsk_Approve'),
          },
        ]}>
        —Хммм…
      </Say>
    </Branch>
  )
}
