import {
  bgCityHallConferenceRoomJpg,
  developerRepAPng,
  mayor2Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'

export function BranchCityHall_ProjAsk() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepAPng, align: 'bottom'}}>
        —Добрый день, я — представитель Bay Shatyr Group. Представляю вашему
        внимаюпроект АСК
      </Say>

      <Say
        image={{uri: mayor2Png, align: 'bottom'}}
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
