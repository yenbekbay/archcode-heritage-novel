import {
  bgZheltoksanAfterJpg,
  bgZheltoksanBeforeFenceGif,
  fenceMp3,
  fencePng,
  redhead2Png,
  redhead3Png,
} from '~/assets/game'
import {Branch, Play, Say, Scene, Show} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'
import {SCENE_AUDIO} from '../sounds'

export function BranchActivist_WalkPast() {
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
        hide={2}
        zIndex={100}
      />

      <Say
        image={{
          uri: redhead2Png.src,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Скорее всего, ничего особенного. Очередное…да не важно
      </Say>

      <Say
        image={{
          uri: redhead3Png.src,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Поберегу нервы, семья ждет, пойду дома чай попью
      </Say>

      <Scene
        src={bgZheltoksanBeforeFenceGif.src}
        audio={SCENE_AUDIO.city}
        durationMs={6000}
      />

      <Say>Оказывается, за забором было здание госплана Желтоксан 115</Say>

      <Scene src={bgZheltoksanAfterJpg.src} audio={SCENE_AUDIO.calmLoop} />

      <Say>
        Его снесли, а на его месте построили K-plaza, которая до сих пор
        наполовину пуста
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
