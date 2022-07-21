import {
  bgBusStop1Jpg,
  bgCityHallConferenceRoomJpg,
  mayor3Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_GovPrograms_Stop_Agree() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg} />

      <Say image={{uri: mayor3Png, align: 'bottom'}}>
        —Спасибо, отличная работа!
      </Say>

      <Say image={{uri: mayor3Png, align: 'bottom'}}>
        —Мы возьмем этот процесс под свой контроль и позаботимся о том, чтобы
        придать этим остановкам особый статус
      </Say>

      <Scene src={bgBusStop1Jpg} />

      <Say>Советские остановки стали достопримечательностью города!</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
