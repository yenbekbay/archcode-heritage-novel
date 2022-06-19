import {bgBldgAJpg, redhead8Png} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchActivist_CheckOut_Act() {
  return (
    <Branch>
      <Scene src={bgBldgAJpg} />

      <Say
        image={{uri: redhead8Png, align: 'bottom'}}
        menu={[
          {
            label: 'Разберусь сама',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act_Self'),
          },
          {
            label: 'Объединиться в команду',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act_Group'),
          },
          {
            label: 'Обратиться в организации',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act_Org'),
          },
        ]}>
        Что я могу?
      </Say>
    </Branch>
  )
}
