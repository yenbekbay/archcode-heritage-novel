import {
  angryCrowd1Png,
  bgCityHallOfficeJpg,
  bgZheltoksanBeforeJpg,
  letterPng,
  mayor2Png,
  stampApprovedPng,
} from '~/assets/game'
import type {SceneBackgroundComponentProps} from '~/lib'
import {Foreground, Say, SceneContainer} from '~/lib'

export function SceneCityHall1_2a_3a_4a_5a_6b_7a() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Foreground
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

      <Foreground
        src={stampApprovedPng}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'translateY(-15%)',
        }}
        transitory
      />

      <Foreground
        src={bgZheltoksanBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Массовый протест
      </Say>

      <Say
        options={[
          {
            label: 'Учесть мнение',
            onClick: (ctx) => alert('Не готово'),
          },
          {
            label: 'Игнорировать',
            onClick: (ctx) => alert('Не готово'),
          },
        ]}
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}>
        Что делать?
      </Say>
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgCityHallOfficeJpg}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
