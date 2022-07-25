import {bgBusStop1Jpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sound'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_StopHalfway() {
  return (
    <Branch>
      <Scene src={bgBusStop1Jpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Объект сохранен, но так и не стал памятником историко-культурного
        наследия
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
