import {
  bgCityHallConferenceRoomJpg,
  mayor1Png,
  mayor4Png,
  portalPaperPng,
} from 'assets/game'
import {Branch, Say, Scene, Show} from 'react-visual-novel'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjAirport() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show
        src={{
          uri: portalPaperPng.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}
      />

      <Say image={{uri: mayor1Png.src, align: 'bottom'}}>
        Указания сверху: одобрить перенос VIP терминала аэоропрта безоговорочно
      </Say>

      <Say
        image={{uri: mayor4Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Нужна экспертиза',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjAirport_Examine'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjAirport_Approve'),
          },
        ]}
      >
        и так, согласование переноса…
      </Say>
    </Branch>
  )
}
