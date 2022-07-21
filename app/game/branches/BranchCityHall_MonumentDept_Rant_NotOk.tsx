import {
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  mayor13Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_MonumentDept_Rant_NotOk() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg} />

      <Say image={{uri: mayor13Png, align: 'bottom'}}>
        {'Хммм…\nЧто-то долго'}
      </Say>

      <Scene src={bgCityHallOutsideJpg} />

      <Say>
        Срок Акима прошел, комиссия так и не состоялась. Новый аким обнуляет все
        действия предыдущего. Все ваши предложения отменяются.
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
