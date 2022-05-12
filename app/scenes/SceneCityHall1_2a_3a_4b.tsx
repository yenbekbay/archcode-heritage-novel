import {
  angryCrowd1Png,
  bgCityHallOfficeJpg,
  bgZheltoksanBeforeJpg,
  mayor4Png,
} from '~/assets/game'
import type {SceneBackgroundComponentProps} from '~/lib'
import {Foreground, Say, SceneContainer} from '~/lib'

export function SceneCityHall1_2a_3a_4b() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        size="lg"
        foregroundSrc={angryCrowd1Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Общественность возмущена
      </Say>

      <Foreground
        src={bgCityHallOfficeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers={2}
      />

      <Say
        size="xl"
        options={[
          {
            label: 'Попросить помощи у блоггеров',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4b_5a'),
          },
          {
            label: 'Вступить в диалог',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4b_5b'),
          },
        ]}
        foregroundSrc={mayor4Png}
        foregroundStyle={{width: '100%', bottom: 0}}>
        Что делать?
      </Say>
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgZheltoksanBeforeJpg}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
