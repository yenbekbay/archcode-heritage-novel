import {
  bgZheltoksanAfterJpg,
  bgZheltoksanBeforeFenceGif,
  fencePng,
  redhead2Png,
  redhead3Png,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'
import {GameOverMenu, GameOverTitle} from '../commands'

export function BranchActivist_WalkPast() {
  return (
    <Branch>
      <Show
        src={{
          uri: fencePng,
          style: {height: '100%', transform: 'translate(-50%) scale(1.15)'},
          animation: {
            initial: {},
            entrance: {},
            exit: {x: '-400%', transition: {duration: 2}},
          },
        }}
        hide={2}
        zIndex={100}
      />

      <Say
        image={{
          uri: redhead2Png,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Скорее всего, ничего особенного. Очередное…да не важно
      </Say>

      <Say
        image={{
          uri: redhead3Png,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Поберегу нервы, семья ждет, пойду дома чай попью
      </Say>

      <Scene src={bgZheltoksanBeforeFenceGif} durationMs={6000} />

      <Say>Оказывается, за забором было здание госплана Желтоксан 115</Say>

      <Scene src={bgZheltoksanAfterJpg} />

      <Say>
        Его снесли, а на его месте построили K-plaza, которая до сих пор
        наполовину пуста
      </Say>

      <GameOverTitle />
      <GameOverMenu />
    </Branch>
  )
}
