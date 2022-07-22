import {bgCityHallMayorOfficeJpg, bgCityHallOutsideJpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_MonumentDept_Rant_Ok() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} />
      <Scene src={bgCityHallOutsideJpg.src} />

      <Say>Состоялась комиссия. ПОЗДРАВЛЯЕМ!!!</Say>

      <Say>
        Здания внесены в список! Теперь они все — памятники и могут стать новым
        активом!
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
