import {
  bgCityHallMayorOfficeJpg,
  letterPng,
  mayor2Png,
  mayor3Png,
  stampApprovedPng,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAirport_Approve() {
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

      <Branch.Say size="lg" transitory>
        Указ: Одобрить снос здания VIP терминала Аэропорта
      </Branch.Say>

      <Branch.Say
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Мнение общественности учитывать не обязательно. Сохранить старый
        терминал — путь архаичного советского мышления
      </Branch.Say>

      <Branch.Say
        foregroundSrc={mayor3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Однако, по закону необходимо провести общественные слушания по проекту
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Дальше',
            onClick: (ctx) =>
              ctx.goToLocation('CityHall_ProjAirport_Examine_Reject', 4),
          },
        ]}
      />
    </Branch.Root>
  )
}
