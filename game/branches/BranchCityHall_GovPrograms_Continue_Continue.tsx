import {bgBusStop4Jpg, bgBusStop5Jpg, bgBusStop6Jpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_GovPrograms_Continue_Continue() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg.src} />
      <Scene src={bgBusStop5Jpg.src} />

      <Say>Вы успешно демонтировали остановку</Say>

      <Scene src={bgBusStop6Jpg.src} />

      <Say>Советские остановки исчезли по всему городу…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
