import {
  bgCityHallOfficeJpg,
  bgCityHallOutsideJpg,
  bgCityHallSignJpg,
  bgMayorDeskJpg,
  mayor1Png,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall1() {
  return (
    <Scene.Container background={bgCityHallOutsideJpg}>
      <Scene.Blank durationMs={3000} transitory />

      <Scene.Foreground
        src={bgCityHallSignJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Scene.Foreground
        src={bgCityHallOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={2}
      />

      <Scene.Say
        size="lg"
        foregroundSrc={mayor1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        -Так-с…Что у нас на повестке дня?
      </Scene.Say>

      <Scene.Foreground
        src={bgMayorDeskJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={3000}
        transitory
        lingers={1}
      />

      <Scene.Choices
        variant="dark"
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
    </Scene.Container>
  )
}
