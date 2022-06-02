import {
  assistant1Png,
  assistant2Png,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  expert1Png,
  expert2Png,
  expert3Png,
  mayor2Png,
} from '~/assets/game'
import {makeStrictBranch} from '~/lib'

const Branch = makeStrictBranch()

export function BranchCityHall_ProjAsk_Examine() {
  return (
    <Branch.Root background={bgCityHallOutsideJpg}>
      <Branch.Say placement="middle" scheme="dark" transitory>
        Экспертиза
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallConferenceRoomJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Branch.Say
        tag="Эксперт:"
        foregroundSrc={expert1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Вижу нарушения…
      </Branch.Say>

      <Branch.Say
        foregroundSrc={expert2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        —Ещё одно! Ещё нарушение!!!
      </Branch.Say>

      <Branch.Foreground
        src={expert3Png}
        style={{width: '100%', bottom: 0}}
        durationMs={3000}
        transitory
      />

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
        durationMs={0}
        transitory
        lingers={3}
      />

      <Branch.Say
        scheme="dark"
        tag="Помощник:"
        foregroundSrc={assistant1Png}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory>
        —Экспертиза выявила несколько нарушений
      </Branch.Say>

      <Branch.Foreground
        src={assistant2Png}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}
      />

      <Branch.Say
        scheme="dark"
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *хдыщ
      </Branch.Say>

      <Branch.Foreground
        src={bgCityHallMayorOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={2}
      />

      <Branch.Say
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать с проектом?
      </Branch.Say>

      <Branch.Choices
        choices={[
          {
            label: 'Не одобрять',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAsk_Examine_Reject'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjAsk_Approve'),
          },
        ]}
      />
    </Branch.Root>
  )
}
