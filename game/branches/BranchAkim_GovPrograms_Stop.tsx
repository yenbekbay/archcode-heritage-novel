import {
  archkot2Png,
  archkot3Png,
  assistant1Png,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  mayor2Png,
  mayor12Png,
  mayor14Png,
} from 'assets/game'
import {Branch, Say, Scene, Show} from 'react-visual-novel'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_GovPrograms_Stop() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Show
        src={{uri: mayor12Png.src, style: {width: '100%', bottom: '-12%'}}}
      />

      <Scene src={bgMayorDoorJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say scheme="dark">*тук-тук</Say>

      <Scene src={bgMayorDoorwayJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        scheme="dark"
        tag={{text: 'Помощник:', color: '#687065'}}
        image={{
          uri: assistant1Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}
      >
        —Общественность и АрхКот хотят встретиться
      </Say>

      <Say
        image={{uri: mayor14Png.src, style: {width: '100%', bottom: '-12%'}}}
      >
        {`
          -Хммм…
          Давайте назначим встречу
        `}
      </Say>

      <Scene
        src={bgCityHallConferenceRoomJpg.src}
        audio={SCENE_AUDIO.hearings}
      />

      <Say>Встреча с АрхКотом</Say>

      <Say image={{uri: archkot2Png.src, align: 'bottom'}}>
        -Мы провели исследование темы и инвентаризацию советских остановок
      </Say>

      <Say image={{uri: archkot3Png.src, align: 'bottom'}}>
        {`
          -Вот карта остановок.

          [Карта остановок](${LINKS.bus_stop_map})

          -Они должны охраняться государством!
        `}
      </Say>

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Он прав!',
            onClick: (ctx) => ctx.goToBranch('Akim_GovPrograms_Stop_Agree'),
          },
          {
            label: 'Бред какой-то',
            onClick: (ctx) => ctx.goToBranch('Akim_GovPrograms_Stop_Dismiss'),
          },
        ]}
      >
        -Я думаю…
      </Say>
    </Branch>
  )
}
