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
        tag={{text: 'Представитель:', color: '#A57B55'}}
        image={{uri: developerRepAPng, align: 'bottom'}}>
        —Добрый день, я — представитель Bay Shatyr Group. Представляю вашему
        внимаю проект KAISAR PLAZA
      </Say>

      <Say
        image={{uri: mayor2Png, align: 'bottom'}}
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
