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
import {Branch, Label, Play, Say, Scene, Show} from '~/lib/game-engine'
import {SCENE_AUDIO} from '../sound'

export function BranchCityHall_Menu_GovPrograms() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: mayor3Png.src, align: 'bottom'}}>
        С 25 числа начать реализацию обновления остановок на территории г.Алматы
      </Say>

      <Scene src={bgBusStop1Jpg.src} audio={SCENE_AUDIO.city} />
      <Scene src={bgBusStop2Jpg.src} audio={SCENE_AUDIO.city} />

      <Play
        audio={SCENE_AUDIO.construction}
        hide={(s) => s.label === 'crowd'}
      />

      <Say>Начинается демонтаж…</Say>

      <Scene src={bgBusStop3Jpg.src} audio={SCENE_AUDIO.city} />

      <Say>Проходит он тяжело</Say>

      <Scene src={bgBusStop4Jpg.src} audio={SCENE_AUDIO.city} />

      <Say>Конструкции мощные</Say>

      <Label label="crowd">
        <Show
          src={{uri: angryCrowd1Png.src, align: 'bottom'}}
          audio={SCENE_AUDIO.chatter}
          hide={2}
        />
      </Label>

      <Say>Общественность возмущена</Say>

      <Say image={{uri: archkot1Png.src, align: 'bottom'}}>
        *АрхКот тоже здесь
      </Say>

      <Scene src={bgMayorDoorJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg.src} audio={SCENE_AUDIO.indoor} />

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

      <Scene src={bgMayorDoorJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say scheme="dark">*хлоп</Say>

      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

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
