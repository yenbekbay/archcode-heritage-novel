import {
  bgCityHallConferenceRoomJpg,
  bgZheltoksanBeforeJpg,
  mayor3Png,
} from '~/assets/game'
import {Foreground, Choices, Say, SceneContainer, Title} from '~/lib'

export function SceneCityHall1_2a_3a_4a_5a_6a() {
  return (
    <SceneContainer background={bgCityHallConferenceRoomJpg}>
      <Say
        foregroundSrc={mayor3Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Выявлен ряд нарушений! Девелопер должен пересмотреть проект
      </Say>

      <Foreground
        src={bgZheltoksanBeforeJpg}
        style={{height: '100%', width: '100%', objectFit: 'cover'}}
        durationMs={0}
        transitory
        lingers
      />

      <Say transitory>
        Поздравляем! Вы защищаете наследие! К тому же, при дальнейшем внесении
        здания в список памятников, оно может стать активом
      </Say>

      <Title transitory lingers>
        Конец игры
      </Title>

      <Choices
        dark
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToScene('Intro'),
          },
        ]}
      />
    </SceneContainer>
  )
}
