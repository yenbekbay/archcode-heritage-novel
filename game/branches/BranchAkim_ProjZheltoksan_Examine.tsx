import {
  assistant1Png,
  assistant2Png,
  bgCityHallConferenceRoomJpg,
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  bgMayorDoorJpg,
  bgMayorDoorwayJpg,
  expert1Png,
  expert2Png,
  expert3Png,
  mayor2Png,
  portalMp3,
  transition1Mp3,
  transition2ShortMp3,
} from 'assets/game'
import {Branch, Say, Scene, Show} from 'react-visual-novel'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjZheltoksan_Examine() {
  return (
    <Branch>
      <Scene
        src={bgCityHallOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />

      <Say placement="middle" scheme="dark">
        Экспертиза
      </Say>

      <Scene
        src={bgCityHallConferenceRoomJpg.src}
        audio={{...SCENE_AUDIO.indoor, onEntrance: transition2ShortMp3}}
      />

      <Say
        tag={{text: 'Эксперт:', color: '#687065'}}
        image={{uri: expert1Png.src, align: 'bottom'}}
      >
        —Вижу нарушения…
      </Say>

      <Say
        tag={{text: 'Эксперт:', color: '#687065'}}
        image={{uri: expert2Png.src, align: 'bottom'}}
      >
        —Ещё одно! Ещё нарушение!!!
      </Say>

      <Show
        src={{uri: expert3Png.src, align: 'bottom'}}
        audio={{onEntrance: portalMp3}}
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
        —Экспертиза выявила несколько нарушений
      </Say>

      <Show
        src={{
          uri: assistant2Png.src,
          style: {height: '100%', width: '100%', objectFit: 'cover'},
        }}
      />

      <Scene src={bgMayorDoorJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say scheme="dark">*хдыщ</Say>

      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say
        image={{uri: mayor2Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Не одобрять',
            onClick: (ctx) =>
              ctx.goToBranch('Akim_ProjZheltoksan_Examine_Reject'),
          },
          {
            label: 'Одобрить',
            onClick: (ctx) => ctx.goToBranch('Akim_ProjZheltoksan_Approve'),
          },
        ]}
      >
        Что делать с проектом?
      </Say>
    </Branch>
  )
}
