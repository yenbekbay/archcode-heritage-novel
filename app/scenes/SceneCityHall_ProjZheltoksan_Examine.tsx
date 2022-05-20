import {
  assistant1Png,
  assistant2Png,
  bgCityHallConferenceRoomJpg,
  bgCityHallOfficeJpg,
  bgCityHallOutsideJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  expert1Png,
  expert2Png,
  expert3Png,
  mayor2Png,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall_ProjZheltoksan_Examine() {
  return (
    <Scene.Container background={bgCityHallOutsideJpg}>
      <Scene.Say size="xl" placement="middle" variant="dark" transitory>
        Экспертиза
      </Scene.Say>

      <Scene.Foreground
        src={bgCityHallConferenceRoomJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Scene.Say
        tag="Эксперт:"
        size="lg"
        foregroundSrc={expert1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Вижу нарушения…
      </Scene.Say>

      <Scene.Say
        tag="Эксперт:"
        size="lg"
        foregroundSrc={expert2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Ещё одно! Ещё нарушение!!!
      </Scene.Say>

      <Scene.Foreground
        src={expert3Png}
        style={{width: '100%', bottom: 0}}
        durationMs={3000}
        transitory
      />

      <Scene.Say
        size="lg"
        variant="dark"
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *тук-тук
      </Scene.Say>

      <Scene.Foreground
        src={bgMayorDoorwayJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={3}
      />

      <Scene.Say
        size="lg"
        variant="dark"
        foregroundSrc={assistant1Png}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory>
        Экспертиза выявила несколько нарушений
      </Scene.Say>

      <Scene.Foreground
        src={assistant2Png}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}
      />

      <Scene.Say
        size="lg"
        variant="dark"
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *хдыщ
      </Scene.Say>

      <Scene.Foreground
        src={bgCityHallOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={2}
      />

      <Scene.Say
        size="lg"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать с проектом?
      </Scene.Say>

      <Scene.Choices
        choices={[
          {
            label: 'Не одобрять',
            onClick: (ctx) =>
              ctx.goToScene('CityHall_ProjZheltoksan_Examine_Reject'),
          },
          {
            label: 'Одобрить',
            onClick: () => alert('Не готово'),
          },
        ]}
      />
    </Scene.Container>
  )
}
