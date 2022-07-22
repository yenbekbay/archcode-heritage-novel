import {
  archkot2Png,
  archkot3Png,
  assistant1Png,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  mayor12Png,
  mayor14Png,
  mayor2Png,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchCityHall_GovPrograms_Stop() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} />

      <Show
        src={{uri: mayor12Png.src, style: {width: '100%', bottom: '-12%'}}}
      />

      <Scene src={bgMayorDoorJpg.src} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg.src} />

      <Say
        scheme="dark"
        tag={{text: 'Помощник:', color: '#687065'}}
        image={{
          uri: assistant1Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —Общественность и АрхКот хотят встретиться
      </Say>

      <Say
        image={{uri: mayor14Png.src, style: {width: '100%', bottom: '-12%'}}}>
        {'-Хммм…\nДавайте назначим встречу'}
      </Say>

      <Scene src={bgCityHallConferenceRoomJpg.src} />

      <Say>Встреча с АрхКотом</Say>

      <Say image={{uri: archkot2Png.src, align: 'bottom'}}>
        -Мы провели исследование темы и инвентаризацию советских остановок
      </Say>

      <Say image={{uri: archkot3Png.src, align: 'bottom'}}>
        {
          '-Вот карта остановок.\n[*ССЫЛКА](#)\n-Они должны охраняться государством!'
        }
      </Say>

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Он прав!',
            onClick: (ctx) => ctx.goToBranch('CityHall_GovPrograms_Stop_Agree'),
          },
          {
            label: 'Бред какой-то',
            onClick: (ctx) =>
              ctx.goToBranch('CityHall_GovPrograms_Stop_Dismiss'),
          },
        ]}>
        -Я думаю…
      </Say>
    </Branch>
  )
}