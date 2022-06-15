import {
  bgCityHallConferenceRoomJpg,
  developerRepAPng,
  mayor2Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib'

export function BranchCityHall_ProjZheltoksan() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say
        tag="Представитель:"
        image={{uri: developerRepAPng, style: {width: '100%', bottom: 0}}}>
        —Добрый день, я — представитель Bay Shatyr Group. Представляю вашему
        внимаю проект KAISAR PLAZA
      </Say>

      <Say
        image={{uri: mayor2Png, style: {width: '100%', bottom: 0}}}
        menu={[
          {
            label: 'Нужна экспертиза',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjZheltoksan_Examine'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('CityHall_ProjZheltoksan_Approve'),
          },
        ]}>
        —Хммм…
      </Say>
    </Branch>
  )
}
