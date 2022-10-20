import {bgBusStop4Jpg, bgBusStop5Jpg, bgBusStop6Jpg} from 'assets/game'
import {Branch, Say, Scene} from 'react-visual-novel'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_GovPrograms_Continue_Continue() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg.src} audio={SCENE_AUDIO.city} />
      <Scene src={bgBusStop5Jpg.src} audio={SCENE_AUDIO.city} />

      <Say>Вы успешно демонтировали остановку</Say>

      <Scene src={bgBusStop6Jpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>Советские остановки исчезли по всему городу…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
