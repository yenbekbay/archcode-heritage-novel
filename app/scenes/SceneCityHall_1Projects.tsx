import {bgMayorDeskAJpg} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall_1Projects() {
  return (
    <Scene.Container background={bgMayorDeskAJpg}>
      <Scene.Say size="xl" variant="dark" transitory durationMs={0} lingers={1}>
        Выберите проект
      </Scene.Say>

      <Scene.Choices
        choices={[
          {
            label: 'Желтоксан',
            onClick: (ctx) => ctx.goToScene('CityHall_ProjZheltoksan'),
          },
        ]}
      />
    </Scene.Container>
  )
}
