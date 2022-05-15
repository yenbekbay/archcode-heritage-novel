import {
  bgCityHallConferenceRoomJpg,
  developerRepPng,
  mayor2Png,
} from '~/assets/game'
import {Say, SceneContainer} from '~/lib'

export function SceneCityHall1_2a_3a() {
  return (
    <SceneContainer background={bgCityHallConferenceRoomJpg}>
      <Say
        tag="Девелопер:"
        foregroundSrc={developerRepPng}
        foregroundStyle={{width: '100%', bottom: 0}}
        transitory>
        Добрый день, я - представитель Bay Shatyr Group. Представляю вашему
        внимаюпроект KAISAR PLAZA
      </Say>

      <Say
        size="xl"
        options={[
          {
            label: 'Нужна экспертиза',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4a'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToScene('CityHall1_2a_3a_4b'),
          },
        ]}
        optionsDark
        foregroundSrc={mayor2Png}
        foregroundStyle={{width: '100%', bottom: 0}}>
        Хммм…
      </Say>
    </SceneContainer>
  )
}
