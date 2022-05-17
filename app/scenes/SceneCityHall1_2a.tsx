import {bgMayorDeskAJpg} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall1_2a() {
  return (
    <Scene.Container background={bgMayorDeskAJpg}>
      <Scene.Say size="xl" variant="dark" transitory durationMs={0} lingers={1}>
        Выберите проект
      </Scene.Say>

      <Scene.Choices
        choices={[
          {
            label: 'Желтоксан',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a'),
          },
        ]}
      />
    </Scene.Container>
  )
}
