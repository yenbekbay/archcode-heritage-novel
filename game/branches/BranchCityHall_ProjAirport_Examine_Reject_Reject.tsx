import {
  bgAirportFenceGif,
  bgCityHallMayorOfficeJpg,
  developerRepB6Png,
  mayor3Png,
} from '~/assets/game'
import {Branch, Say, Scene} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchCityHall_ProjAirport_Examine_Reject_Reject() {
  return (
    <Branch>
      <Scene src={bgCityHallMayorOfficeJpg.src} />

      <Say image={{uri: mayor3Png.src, align: 'bottom'}}>
        —В проекте действительно есть ряд нарушений, нужно его изменить
      </Say>

      <Say
        tag={{text: 'Девелопер:', color: '#A57B55'}}
        image={{uri: developerRepB6Png.src, align: 'bottom'}}>
        —Мы учли мнение общественности и данный проект сохранияет наше
        историко-культурное наследие
      </Say>

      <Scene src={bgAirportFenceGif.src} durationMs={6000} />

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
