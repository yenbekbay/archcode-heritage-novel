import {
  bgCityHallConferenceRoomJpg,
  bgZheltoksanBeforeJpg,
  mayor3Png,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall_ProjZheltoksan_Examine_Reject_Listen() {
  return (
    <Scene.Container background={bgCityHallConferenceRoomJpg}>
      <Scene.Say
        foregroundSrc={mayor3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Выявлен ряд нарушений! Девелопер должен пересмотреть проект
      </Scene.Say>

      <Scene.Foreground
        src={bgZheltoksanBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Scene.Say transitory>
        Поздравляем! Вы защищаете наследие! К тому же, при дальнейшем внесении
        здания в список памятников, оно может стать активом
      </Scene.Say>

      <Scene.Title transitory lingers>
        Конец игры
      </Scene.Title>

      <Scene.Choices
        variant="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('Intro'),
          },
        ]}
      />
    </Scene.Container>
  )
}
