import {
  angryCrowd1Png,
  bgCityHallOfficeJpg,
  bgZheltoksanBeforeJpg,
  letterPng,
  mayor2Png,
  stampApprovedPng,
} from '~/assets/game'
import {makeBranch} from '~/lib'

const Branch = makeBranch()

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore() {
  return (
    <Branch.Container background={bgCityHallOfficeJpg}>
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
        lingers={1}
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
      />

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
        Массовый протест
      </Branch.Say>

      <Branch.Say
        size="xl"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Учесть мнение',
            onClick: (ctx) => alert('Не готово'),
          },
          {
            label: 'Игнорировать',
            onClick: (ctx) => alert('Не готово'),
          },
        ]}
      />
    </Branch.Container>
  )
}
