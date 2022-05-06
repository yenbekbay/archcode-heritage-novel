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
import {Foreground, Say} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export function SceneCityHall1_2a_3a_4a() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say size="xl" placement="middle" dark transitory>
        Экспертиза
      </Say>

      <Foreground
        src={bgCityHallConferenceRoomJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers
      />

      <Say
        tag="Эксперт:"
        size="lg"
        foregroundSrc={expert1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Вижу нарушения…
      </Say>

      <Say
        tag="Эксперт:"
        size="lg"
        foregroundSrc={expert2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Ещё одно! Ещё нарушение!!!
      </Say>

      <Foreground
        src={expert3Png}
        style={{width: '100%', bottom: 0}}
        durationMs={3000}
        transitory
      />

      <Say
        size="lg"
        dark
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *тук-тук
      </Say>

      <Foreground
        src={bgMayorDoorwayJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={3}
      />

      <Say
        size="lg"
        dark
        foregroundSrc={assistant1Png}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory>
        Экспертиза выявила несколько нарушений
      </Say>

      <Foreground
        src={assistant2Png}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}
      />

      <Say
        size="lg"
        dark
        foregroundSrc={bgMayorDoorJpg}
        foregroundStyle={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={1}>
        *хдыщ
      </Say>

      <Foreground
        src={bgCityHallOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        transitory
        lingers={2}
      />

      <Say
        size="lg"
        options={[
          {
            label: 'Не одобрять',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4a_5a'),
          },
          {
            label: 'Одобрить',
            onClick: () => alert('Не готово'),
          },
        ]}
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Что делать с проектом?
      </Say>
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgCityHallOutsideJpg}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
