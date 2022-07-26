import {
  bgCityHallConferenceRoomJpg,
  developerRepAPng,
  mayor2Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjAsk() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        tag={{text: 'Менеджер проекта:', color: '#A57B55'}}
        image={{uri: developerRepAPng.src, align: 'bottom'}}>
        —Добрый день, я — представитель Bay Shatyr Group. Представляю вашему
        внимаюпроект АСК
      </Say>

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Нужна экспертиза',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjAsk_Examine'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjAsk_Approve'),
          },
        ]}>
        —Хммм…
      </Say>
    </Branch>
  )
}
