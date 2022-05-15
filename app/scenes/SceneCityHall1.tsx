import {
  bgCityHallOfficeJpg,
  bgCityHallOutsideJpg,
  bgCityHallSignJpg,
  bgMayorDeskJpg,
  mayor1Png,
} from '~/assets/game'
import {Blank, Foreground, Choices, Say, SceneContainer} from '~/lib'

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

      <Choices
        dark
        choices={[
          {
            label: 'Проекты девелопера',
            frame: {
              viewport: [1080, 1920],
              rect: {
                x: 580,
                y: 680,
                width: 420,
                height: 500,
                transform: 'rotate(13deg)',
              },
            },
            onClick: (ctx) => ctx.goToScene('CityHall1_2a'),
          },
          {
            label: 'Отдел памятников',
            frame: {
              viewport: [1080, 1920],
              rect: {
                x: -20,
                y: 1000,
                width: 400,
                height: 500,
                transform: 'rotate(-17deg)',
              },
            },
            onClick: () => alert('Не готово'),
          },
          {
            label: 'Государственные программы',
            frame: {
              viewport: [1080, 1920],
              rect: {
                x: 580,
                y: 1320,
                width: 400,
                height: 500,
                transform: 'rotate(13deg)',
              },
            },
            onClick: () => alert('Не готово'),
          },
        ]}
        transitory
      />
    </SceneContainer>
  )
}
