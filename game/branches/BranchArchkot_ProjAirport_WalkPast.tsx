import {
  archkot6Png,
  bgAirportFenceGif,
  bgAirportJpg,
  fenceMp3,
  fencePng,
} from '~/assets/game'
import {Branch, Play, Say, Scene, Show} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sound'

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
        audio={{
          ...SCENE_AUDIO.city,
          onExit: fenceMp3,
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

      <Scene src={bgAirportJpg.src} audio={SCENE_AUDIO.city} />

      <Say>Оказывается, за забором был старенький VIP терминал аэропорта…</Say>

      <Scene
        src={bgAirportFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />

      <Play audio={SCENE_AUDIO.calmLoop} hide={-1} />

      <Say>
        Теперь здание изменится до неузнаваемости, и уже не будет иметь
        отношения к историко-культурному наследию
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
