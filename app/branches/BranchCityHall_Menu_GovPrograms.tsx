import {
  angryCrowd1Png,
  archkot1Png,
  assistant1Png,
  assistant2Png,
  bgBusStop1Jpg,
  bgBusStop2Jpg,
  bgBusStop3Jpg,
  bgBusStop4Jpg,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  mayor2Png,
  mayor3Png,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchCityHall_Menu_GovPrograms() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say image={{uri: mayor3Png, style: {width: '100%', bottom: 0}}}>
        С 25 числа начать реализацию обновления остановок на территории г.Алматы
      </Say>

      <Scene src={bgBusStop1Jpg} />
      <Scene src={bgBusStop2Jpg} />

      <Say>Начинается демонтаж…</Say>

      <Scene src={bgBusStop3Jpg} />

      <Say>Проходит он тяжело</Say>

      <Scene src={bgBusStop4Jpg} />

      <Say>Конструкции мощные</Say>

      <Show
        src={{uri: angryCrowd1Png, style: {width: '100%', bottom: 0}}}
        hide={2}
      />

      <Say>Общественность возмущена</Say>

      <Say image={{uri: archkot1Png, style: {width: '100%', bottom: 0}}}>
        *АрхКот тоже здесь
      </Say>

      <Scene src={bgMayorDoorJpg} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg} />

      <Show
        src={{
          uri: assistant2Png,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}
      />

      <Say
        scheme="dark"
        tag="Помощник:"
        image={{
          uri: assistant1Png,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —Общественность возмущена
      </Say>

      <Scene src={bgMayorDoorJpg} />

      <Say scheme="dark">*хлоп</Say>

      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say
        image={{uri: mayor2Png, style: {width: '100%', bottom: 0}}}
        menu={[
          {
            label: 'Продолжить демонтаж',
            onClick: (ctx) => ctx.goToBranch('CityHall_GovPrograms_Continue'),
          },
          {
            label: 'Остановить демонтаж',
            onClick: (ctx) => ctx.goToBranch('CityHall_GovPrograms_Stop'),
          },
        ]}>
        Что делать?
      </Say>
    </Branch>
  )
}
