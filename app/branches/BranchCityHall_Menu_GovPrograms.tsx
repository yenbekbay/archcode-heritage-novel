import {
  angryCrowd1Png,
  archkot1Png,
  assistant1Png,
  assistant2Png,
  bgBusStop1Jpg,
  bgBusStop2Jpg,
  bgBusStop3Jpg,
  bgBusStop4Jpg,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  mayor2Png,
  mayor3Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_Menu_GovPrograms() {
  return (
    <Branch.Root background={bgCityHallConferenceRoomJpg}>
      <Branch.Blank durationMs={3000} transitory />

      <Branch.Say
        foregroundSrc={mayor3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        С 25 числа начать реализацию обновления остановок на территории г.Алматы
      </Branch.Say>

      <Branch.Foreground
        src={bgBusStop1Jpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={3000}
        lingers={1}
      />

      <Branch.Foreground
        src={bgBusStop2Jpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={0}
        lingers={2}
      />

      <Branch.Say transitory>Начинается демонтаж…</Branch.Say>

      <Branch.Foreground
        src={bgBusStop3Jpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={0}
        lingers={2}
      />

      <Branch.Say transitory>Проходит он тяжело</Branch.Say>

      <Branch.Foreground
        src={bgBusStop4Jpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={0}
        lingers={4}
      />

      <Branch.Say transitory>Конструкции мощные</Branch.Say>

      <Branch.Foreground
        src={angryCrowd1Png}
        style={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={2}
      />

      <Branch.Say transitory>Общественность возмущена</Branch.Say>

      <Branch.Say
        foregroundSrc={archkot1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        *АрхКот тоже здесь
      </Branch.Say>

      <Branch.Say
        scheme="dark"
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *тук-тук
      </Branch.Say>

      <Branch.Foreground
        src={bgMayorDoorwayJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={0}
        lingers={3}
      />

      <Branch.Foreground
        src={assistant2Png}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
      />

      <Branch.Say
        scheme="dark"
        tag="Помощник:"
        foregroundSrc={assistant1Png}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory>
        —Общественность возмущена
      </Branch.Say>

      <Branch.Say
        scheme="dark"
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *хлоп
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallMayorOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        durationMs={0}
        lingers={2}
      />

      <Branch.Say
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
            onClick: (ctx) => ctx.goToBranch('CityHall_GovPrograms_Continue'),
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
