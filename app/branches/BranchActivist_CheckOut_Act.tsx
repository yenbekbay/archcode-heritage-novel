import {bgBldgAJpg, redhead8Png} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchActivist_CheckOut_Act() {
  return (
    <Branch.Root background={bgBldgAJpg}>
      <Branch.Say
        foregroundSrc={redhead8Png}
        foregroundStyle={{width: '90%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что я могу?
      </Branch.Say>

      <Branch.Choices
        scheme="dark"
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
    </Branch.Root>
  )
}
