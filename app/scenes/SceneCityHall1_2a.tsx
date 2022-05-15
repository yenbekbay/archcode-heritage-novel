import {bgMayorDeskAJpg} from '~/assets/game'
import {Say, SceneContainer} from '~/lib'

export function SceneCityHall1_2a() {
  return (
    <SceneContainer background={bgMayorDeskAJpg}>
      <Say
        size="xl"
        dark
        choices={[
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
