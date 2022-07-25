import {
  angryCrowd1Png,
  bgCityHallMayorOfficeJpg,
  bgZheltoksanBeforeJpg,
  letterPng,
  mayor4Png,
  stampApprovedPng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjZheltoksan_Examine_Reject_Ignore_Ignore() {
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

      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say
        image={{uri: angryCrowd1Png.src, align: 'bottom'}}
        audio={SCENE_AUDIO.chatter}>
        Массовый протест
      </Say>

      <Say
        image={{uri: mayor4Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Учесть мнение',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Akim_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Listen',
              ),
          },
          {
            label: 'Игнорировать',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Akim_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Ignore',
              ),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
