import {bgBldg1Jpg, redhead8Png} from '~/assets/game'
import {makeBranch} from '~/lib'

const Branch = makeBranch()

export function BranchActivist_CheckOut_Act() {
  return (
    <Branch.Container background={bgBldg1Jpg}>
      <Branch.Say
        size="xl"
        foregroundSrc={redhead8Png}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что я могу?
      </Branch.Say>

      <Branch.Choices
        variant="dark"
        choices={[
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
        ]}
      />
    </Branch.Container>
  )
}
