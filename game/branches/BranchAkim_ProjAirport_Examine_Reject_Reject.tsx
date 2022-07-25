import {
  bgAirportFenceGif,
  bgCityHallMayorOfficeJpg,
  developerRepB6Png,
  mayor3Png,
} from '~/assets/game'
import {Branch, Play, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchAkim_ProjAirport_Examine_Reject_Reject() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} audio={SCENE_AUDIO.indoor} />

      <Say image={{uri: mayor3Png.src, align: 'bottom'}}>
        —В проекте действительно есть ряд нарушений, нужно его изменить
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB6Png.src, align: 'bottom'}}>
        —Мы учли мнение общественности и данный проект сохранияет наше
        историко-культурное наследие
      </Say>

      <Scene
        src={bgAirportFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <Say>
        ПОЗДРАВЛЯЕМ! Несмотря ни на что, вы защищаете культурное и историческое
        наследие: Вы учли мнение общественности, повысив уровень их доверия к
        Вам. Сохранив странное здание VIP терминала, вы повышаете рейтинг
        аэропорта; растет интерес туристов
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
