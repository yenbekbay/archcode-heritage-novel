import {bgZheltoksanBeforeJpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjZheltoksan_Demolish_IgnoreRisks_Approved_Silence() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.city} />

      <Say>
        Слушания подошли к концу, общественность не верит вашим словам, но
        теперь у нас собран целый альбом комментариев
      </Say>

      <Say
        menu={[
          {
            label: 'Учесть мнения',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Developer_ProjZheltoksan_Demolish_IgnoreRisks_Approved__Reconsider',
              ),
          },
          {
            label: 'Продолжить стройку',
            onClick: (ctx) =>
              ctx.goToBranch(
                'Developer_ProjZheltoksan_Demolish_IgnoreRisks_Approved__Continue',
              ),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
