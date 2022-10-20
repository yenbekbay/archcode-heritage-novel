import {bgBusStop1Jpg} from 'assets/game'
import {Branch, Say, Scene} from 'react-visual-novel'
import {GameOverMenu, GameOverTitle} from '../commands'
import {LINKS} from '../links'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjBusStop_CheckOut_AssembleTeam_StopHalfway() {
  return (
    <Branch>
      <Scene src={bgBusStop1Jpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        {`
          Объект сохранен, но так и не стал памятником историко-культурного наследия

          [Статья о том, как это происходило](${LINKS.article_bus_stop_restoration})

          [Пост в Инстаграме](${LINKS.instagram_post_bus_stop_restoration})
        `}
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
