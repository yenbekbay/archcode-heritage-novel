import {
  angryCrowd1Png,
  bgAskBeforeJpg,
  bgCityHallMayorOfficeJpg,
  letterPng,
  mayor4Png,
  stampApprovedPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjAsk_Approve() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show
        src={{
          uri: letterPng.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundColor: '#e7dbab',
            transform: 'scale(2.5)',
            transformOrigin: '50% 35%',
          },
        }}
        hide={2}
      />

      <Show
        src={{
          uri: stampApprovedPng.src,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'translateY(-15%)',
          },
        }}
      />

      <Scene src={bgAskBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={SCENE_AUDIO.chatter}>
        Общественность возмущена
      </Say>

      <Say
        image={{uri: mayor4Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Попросить помощи у блоггеров',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjAsk_Approve_AskHelp'),
          },
          {
            label: 'Вступить в диалог',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjAsk_Examine_Reject'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
