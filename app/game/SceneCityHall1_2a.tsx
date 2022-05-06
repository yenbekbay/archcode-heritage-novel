import {bgMayorDeskAJpg} from '~/assets/game'
import {Say} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer} from './components'

export function SceneCityHall1_2a() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say
        size="xl"
        dark
        options={[
          {
            label: 'Желтоксан',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a'),
          },
        ]}>
        Выберите проект
      </Say>
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <img
      src={bgMayorDeskAJpg}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover"
    />
  )
}
