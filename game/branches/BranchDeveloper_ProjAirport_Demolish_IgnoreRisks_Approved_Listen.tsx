import {
  architectPng,
  bgAirportFenceGif,
  bgDeveloperHqInsideJpg,
  bgDeveloperHqOutsideJpg,
  developerRepB9Png,
  transition1Mp3,
  transition2ShortMp3,
} from 'assets/game'
import {Branch, Play, Say, Scene} from 'react-visual-novel'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchDeveloper_ProjAirport_Demolish_IgnoreRisks_Approved_Listen() {
  return (
    <Branch>
      <Scene
        src={bgDeveloperHqOutsideJpg.src}
        audio={{onEntrance: transition1Mp3}}
      />
      <Scene
        src={bgDeveloperHqInsideJpg.src}
        audio={{...SCENE_AUDIO.indoor, onEntrance: transition2ShortMp3}}
      />

      <Say image={{uri: developerRepB9Png.src, align: 'bottom'}}>
        —Я принял решение пересмотреть проект. Риски велики. Невозможно и дальше
        игнорировать общественность
      </Say>

      <Say image={{uri: architectPng.src, align: 'bottom'}}>
        —Будем делать новый проект, сохраняя памятник, который так же нужно
        отреставрировать
      </Say>

      <Scene
        src={bgAirportFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <Say>
        ПОЗДРАВЛЯЕМ! Вы сделали все возможное чтобы сохранить исторический облик
        здания
      </Say>

      <Say hide={-1}>Продолжение следует…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
