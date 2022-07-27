import {
  bgCityHallConferenceRoomJpg,
  bgZheltoksanBeforeJpg,
  mayor3Png,
} from 'assets/game'
import {Branch, Say, Scene} from 'lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjZheltoksan_Examine_Reject_Listen() {
  return (
    <Branch>
      <Scene src={bgCityHallConferenceRoomJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: mayor3Png.src, align: 'bottom'}}>
        Выявлен ряд нарушений! Девелопер должен пересмотреть проект
      </Say>

      <Scene src={bgZheltoksanBeforeJpg.src} audio={SCENE_AUDIO.calmLoop} />

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
