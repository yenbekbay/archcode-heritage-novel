import {bgZheltoksanBeforeJpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchDeveloper_ProjZheltoksan_Demolish_IgnoreRisks_Approved_Silence() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg} />

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
