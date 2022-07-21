import {bgBusStop1Jpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_StopHalfway() {
  return (
    <Branch>
      <Scene src={bgBusStop1Jpg} />

      <Say>
        Объект сохранен, но так и не стал памятником историко-культурного
        наследия
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
