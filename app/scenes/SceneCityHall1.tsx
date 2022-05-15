import {
  bgCityHallOfficeJpg,
  bgCityHallOutsideJpg,
  bgCityHallSignJpg,
  bgMayorDeskJpg,
  mayor1Png,
} from '~/assets/game'
import {Blank, Foreground, Options, Say, SceneContainer} from '~/lib'

export function SceneCityHall1() {
  return (
    <SceneContainer background={bgCityHallOutsideJpg}>
      <Blank durationMs={3000} transitory />

      <Foreground
        src={bgCityHallSignJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Foreground
        src={bgCityHallOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={2}
      />

      <Say
        size="lg"
        foregroundSrc={mayor1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        -Так-с…Что у нас на повестке дня?
      </Say>

      <Foreground
        src={bgMayorDeskJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Options
        dark
        options={[
          {
            label: 'Проекты девелопера',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a'),
          },
          {
            label: 'Отдел памятников',
            onClick: () => alert('Не готово'),
          },
          {
            label: 'Государственные программы',
            onClick: () => alert('Не готово'),
          },
        ]}
        transitory
      />
    </SceneContainer>
  )
}
