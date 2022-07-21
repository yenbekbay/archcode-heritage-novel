import {
  bgCityHallConferenceRoomJpg,
  bgZheltoksanBeforeJpg,
  mayor3Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_ProjZheltoksan_Examine_Reject_Listen() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say image={{uri: mayor3Png, align: 'bottom'}}>
        Выявлен ряд нарушений! Девелопер должен пересмотреть проект
      </Say>

      <Scene src={bgZheltoksanBeforeJpg} />

      <Say>
        Поздравляем! Вы защищаете наследие! К тому же, при дальнейшем внесении
        здания в список памятников, оно может стать активом и привлекать людей
        исторической ценностью
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
