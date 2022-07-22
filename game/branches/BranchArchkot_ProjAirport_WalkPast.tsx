import {
  archkot6Png,
  bgAirportFenceGif,
  bgAirportJpg,
  fencePng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchArchkot_ProjAirport_WalkPast() {
  return (
    <Branch>
      <Show
        src={{
          uri: fencePng.src,
          style: {height: '100%', transform: 'translate(-50%) scale(1.15)'},
          animation: {
            initial: {},
            entrance: {},
            exit: {x: '-400%', transition: {duration: 2}},
          },
        }}
        hide={1}
        zIndex={100}
      />

      <Say
        image={{
          uri: archkot6Png.src,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Не стоит зря терять времени, дедлайны горят, дома кот некормленный, да
        сериал недосмотренный
      </Say>

      <Scene src={bgAirportJpg.src} />

      <Say>Оказывается, за забором был старенький VIP терминал аэропорта…</Say>

      <Scene src={bgAirportFenceGif.src} durationMs={6000} />

      <Say>
        Теперь здание изменится до неузнаваемости, и уже не будет иметь
        отношения к историко-культурному наследию
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
