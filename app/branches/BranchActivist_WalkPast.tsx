import {
  bgBldgAFenceGif,
  fencePng,
  redhead2Png,
  redhead3Png,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show, Title} from '~/lib'

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
        visibility={2}
        zIndex={100}
      />

      <Say
        image={{
          uri: redhead2Png,
          style: {
            width: '100%',
            bottom: 0,
            filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
          },
        }}
        zIndex={101}>
        Скорее всего, ничего особенного. Очередное…да не важно
      </Say>

      <Say
        image={{
          uri: redhead3Png,
          style: {
            width: '100%',
            bottom: 0,
            filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
          },
        }}
        zIndex={101}>
        Поберегу нервы, семья ждет, пойду дома чай попью
      </Say>

      <Scene src={bgBldgAFenceGif} durationMs={10000} />

      <Title visibility="indefinite">Конец игры</Title>

      <Menu
        scheme="dark"
        choices={[
          {
            label: 'Начать заново',
            onClick: (ctx) => ctx.goToBranch('Intro'),
          },
        ]}
      />
    </Branch>
  )
}
