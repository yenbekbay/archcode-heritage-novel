import {
  bgBusStop5Jpg,
  bgBusStop6Jpg,
  bgCityHallConferenceRoomJpg,
  mayor15Png,
  mayor3Png,
  mayor9Png,
} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_GovPrograms_Stop_Dismiss() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: mayor9Png.src, align: 'bottom'}}>
        —Никакой ценности эти остановки не имеют!
      </Say>

      <Say image={{uri: mayor15Png.src, align: 'bottom'}}>
        —Всё это-пережитки советского прошлого!
      </Say>

      <Say image={{uri: mayor3Png.src, align: 'bottom'}}>
        —Не одобрять проект!
      </Say>

      <Scene src={bgBusStop5Jpg.src} audio={SCENE_AUDIO.city} />

      <Say>Вы успешно демонтировали остановку</Say>

      <Scene src={bgBusStop6Jpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>Советские остановки исчезли по всему городу…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
