import {
  angryCrowd1Png,
  angryCrowd2Png,
  bgCityHallOfficeJpg,
  bgPhoneFingerJpg,
  bgZheltoksanAfterJpg,
  bgZheltoksanBeforeFenceGif,
  bgZheltoksanBeforeJpg,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjZheltoksan_Approve_AskHelp() {
  return (
    <Branch.Root background={bgCityHallOfficeJpg}>
      <Branch.Say
        size="lg"
        foregroundSrc={bgPhoneFingerJpg}
        foregroundStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'scale(1.5)',
        }}
        lingers={1}>
        “Ребята, напишите, что реконструкция крутая”
      </Branch.Say>

      <Branch.Foreground
        src={bgZheltoksanBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Branch.Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        {`-Надувательство\n\n-Бред собачий`}
      </Branch.Say>

      <Branch.Say
        size="lg"
        foregroundSrc={angryCrowd2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        -Продажные чуваки
      </Branch.Say>

      <Branch.Foreground
        src={bgZheltoksanBeforeFenceGif}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={6000}
        lingers={1}
        transitory
      />

      <Branch.Foreground
        src={bgZheltoksanAfterJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        lingers
        transitory
      />

      <Branch.Say size="lg" transitory>
        Вы успешно реконструировали Желтоксан 115
      </Branch.Say>

      <Branch.Say transitory>
        Здание утратило первоначальный облик и больше не представляет
        исторической ценности. Теперь Вам будет сложнее работать с
        общественностью
      </Branch.Say>

      <Branch.Title transitory lingers>
        Конец игры
      </Branch.Title>

      <Branch.Choices
        variant="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch.Root>
  )
}
