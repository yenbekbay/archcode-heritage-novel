import {
  bgCityHallConferenceRoomJpg,
  developerRepPng,
  mayor2Png,
} from '~/assets/game'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneCityHall1_2a_3a() {
  return (
    <Scene.Container background={bgCityHallConferenceRoomJpg}>
      <Scene.Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Добрый день, я - представитель Bay Shatyr Group. Представляю вашему
        внимаюпроект KAISAR PLAZA
      </Scene.Say>

      <Scene.Say
        size="xl"
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory
        durationMs={0}
        lingers={1}>
        Хммм…
      </Scene.Say>

      <Scene.Choices
        variant="dark"
        choices={[
          {
            label: 'Нужна экспертиза',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4a'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4b'),
          },
        ]}
      />
    </Scene.Container>
  )
}
