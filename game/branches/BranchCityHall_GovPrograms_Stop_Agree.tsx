import {
  bgBusStop1Jpg,
  bgCityHallConferenceRoomJpg,
  mayor3Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchCityHall_GovPrograms_Stop_Agree() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: mayor3Png.src, align: 'bottom'}}>
        —Спасибо, отличная работа!
      </Say>

      <Say image={{uri: mayor3Png.src, align: 'bottom'}}>
        —Мы возьмем этот процесс под свой контроль и позаботимся о том, чтобы
        придать этим остановкам особый статус
      </Say>

      <Scene src={bgBusStop1Jpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>Советские остановки стали достопримечательностью города!</Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
