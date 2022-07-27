import {bgZheltoksanBeforeJpg} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Listen() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Поздравляем! Вы защищаете наследие! К тому же, при дальнейшем внесении
        здания в список памятников, оно может стать активом
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
