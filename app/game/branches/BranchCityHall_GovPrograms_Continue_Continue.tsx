import {bgBusStop4Jpg, bgBusStop5Jpg, bgBusStop6Jpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_GovPrograms_Continue_Continue() {
  return (
    <Branch>
      <Scene src={bgBusStop4Jpg} />
      <Scene src={bgBusStop5Jpg} />

      <Say>Вы успешно демонтировали остановку</Say>

      <Scene src={bgBusStop6Jpg} />

      <Say>Советские остановки исчезли по всему городу…</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
