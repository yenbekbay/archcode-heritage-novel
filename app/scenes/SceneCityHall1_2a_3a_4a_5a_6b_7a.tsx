import {
  angryCrowd1Png,
  bgCityHallOfficeJpg,
  bgZheltoksanBeforeJpg,
  letterPng,
  mayor2Png,
  stampApprovedPng,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall1_2a_3a_4a_5a_6b_7a() {
  return (
    <Scene.Container background={bgCityHallOfficeJpg}>
      <Scene.Foreground
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

      <Scene.Foreground
        src={stampApprovedPng}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'translateY(-15%)',
        }}
        transitory
      />

      <Scene.Foreground
        src={bgZheltoksanBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Scene.Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Массовый протест
      </Scene.Say>

      <Scene.Say
        size="xl"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Что делать?
      </Scene.Say>

      <Scene.Choices
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
    </Scene.Container>
  )
}
