import {
  angryCrowd1Png,
  bgBusStop4Jpg,
  bgCityHallMayorOfficeJpg,
  mayor2Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_GovPrograms_Continue() {
  return (
    <Branch.Root background={bgBusStop4Jpg}>
      <Branch.Say size="lg" transitory>
        Демонтаж продолжается, но идет медленно и проблемно из-за крепких
        конструкций
      </Branch.Say>

      <Branch.Say
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        За день общественность успевает распространить информацию о демонтаже. В
        акимат пришло несколько писем от активистов с просьбой остановить
        демонтаж остановки
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallMayorOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={0}
        lingers={2}
      />

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
            label: 'Продолжить демонтаж',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_GovPrograms_Continue_Continue'),
          },
          {
            label: 'Остановить демонтаж',
            onClick: (ctx) => ctx.goToBranch('CityHall_GovPrograms_Stop'),
          },
        ]}
      />
    </Branch.Root>
  )
}
