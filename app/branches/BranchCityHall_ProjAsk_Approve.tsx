import {
  angryCrowd1Png,
  bgAskBeforeJpg,
  bgCityHallMayorOfficeJpg,
  letterPng,
  mayor4Png,
  stampApprovedPng,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAsk_Approve() {
  return (
    <Branch.Root background={bgCityHallMayorOfficeJpg}>
      <Branch.Foreground
        src={letterPng}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          backgroundColor: '#e7dbab',
          transform: 'scale(2.5)',
          transformOrigin: '50% 35%',
        }}
        transitory
        lingers={2}
      />

      <Branch.Foreground
        src={stampApprovedPng}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'translateY(-15%)',
        }}
        transitory
        lingers={1}
      />

      <Branch.Foreground
        src={bgAskBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={1}
      />

      <Branch.Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Общественность возмущена
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor4Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Попросить помощи у блоггеров',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjAsk_Approve_AskHelp'),
          },
          {
            label: 'Вступить в диалог',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAsk_Approve_Debate'),
          },
        ]}
      />
    </Branch.Root>
  )
}
