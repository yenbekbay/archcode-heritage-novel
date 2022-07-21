import {bgZheltoksanBeforeJpg} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Ignore_Ignore_Listen() {
  return (
    <Branch>
      <Scene src={bgZheltoksanBeforeJpg} />

      <Say>
        Поздравляем! Вы защищаете наследие! К тому же, при дальнейшем внесении
        здания в список памятников, оно может стать активом
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
