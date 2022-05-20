import {
  angryCrowd1Png,
  bgCityHallOfficeJpg,
  bgZheltoksanBeforeJpg,
  mayor4Png,
} from '~/assets/game'
import {makeBranch} from '~/lib'

const Branch = makeBranch()

export function BranchCityHall_ProjZheltoksan_Approve() {
  return (
    <Branch.Container background={bgZheltoksanBeforeJpg}>
      <Branch.Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Общественность возмущена
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={2}
      />

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
              ctx.goToBranch('CityHall_ProjZheltoksan_Approve_AskHelp'),
          },
          {
            label: 'Вступить в диалог',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_ProjZheltoksan_Approve_Debate'),
          },
        ]}
      />
    </Branch.Container>
  )
}
