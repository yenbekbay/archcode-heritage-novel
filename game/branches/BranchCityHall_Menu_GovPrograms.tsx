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
  chatterOgg,
  constructionOgg,
  mayor2Png,
  mayor3Png,
} from '~/assets/game'
import {Branch, Label, Play, Say, Scene, Show} from '~/lib/game-engine'

export function BranchCityHall_Menu_GovPrograms() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} />

      <Say image={{uri: mayor3Png.src, align: 'bottom'}}>
        С 25 числа начать реализацию обновления остановок на территории г.Алматы
      </Say>

      <Scene src={bgBusStop1Jpg.src} />
      <Scene src={bgBusStop2Jpg.src} />

      <Play
        audio={{uri: constructionOgg, loop: true}}
        hide={(s) => s.label === 'crowd'}
      />

      <Say>Начинается демонтаж…</Say>

      <Scene src={bgBusStop3Jpg.src} />

      <Say>Проходит он тяжело</Say>

      <Scene src={bgBusStop4Jpg.src} />

      <Say>Конструкции мощные</Say>

      <Label label="crowd">
        <Show
          src={{uri: angryCrowd1Png.src, align: 'bottom'}}
          audio={{uri: chatterOgg, loop: true}}
          hide={2}
        />
      </Label>

      <Say>Общественность возмущена</Say>

      <Say image={{uri: archkot1Png.src, align: 'bottom'}}>
        *АрхКот тоже здесь
      </Say>

      <Scene src={bgMayorDoorJpg.src} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg.src} />

      <Show
        src={{
          uri: assistant2Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}
      />

      <Say
        scheme="dark"
        tag={{text: 'Помощник:', color: '#687065'}}
        image={{
          uri: assistant1Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}>
        —Общественность возмущена
      </Say>

      <Scene src={bgMayorDoorJpg.src} />

      <Say scheme="dark">*хлоп</Say>

      <Scene src={bgCityHallMayorOfficeJpg.src} />

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
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
