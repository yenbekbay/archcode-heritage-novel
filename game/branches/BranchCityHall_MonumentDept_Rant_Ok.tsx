import {bgCityHallMayorOfficeJpg, bgCityHallOutsideJpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchCityHall_MonumentDept_Rant_Ok() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />
      <Scene src={bgCityHallOutsideJpg.src} audio={SCENE_AUDIO.calmLoop} />

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
