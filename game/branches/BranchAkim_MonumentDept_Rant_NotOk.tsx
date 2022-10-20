import {
  bgCityHallMayorOfficeJpg,
  bgCityHallOutsideJpg,
  mayor13Png,
} from 'assets/game'
import {Branch, Say, Scene} from 'react-visual-novel'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_MonumentDept_Rant_NotOk() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: mayor13Png.src, align: 'bottom'}}>
        {`
          Хммм…
          Что-то долго
        `}
      </Say>

      <Scene src={bgCityHallOutsideJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Срок Акима прошел, комиссия так и не состоялась. Новый аким обнуляет все
        действия предыдущего. Все ваши предложения отменяются.
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
