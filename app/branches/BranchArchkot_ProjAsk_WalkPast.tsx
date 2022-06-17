import {
  archkot6Png,
  archkot7Png,
  bgAskAfterJpg,
  bgAskBeforeFenceGif,
  fencePng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show, Title} from '~/lib'

export function BranchArchkot_ProjAsk_WalkPast() {
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
        hide={1}
        zIndex={100}
      />

      <Say
        image={{
          uri: archkot6Png,
          style: {
            width: '100%',
            bottom: 0,
            filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
          },
        }}
        zIndex={101}>
        Не стоит зря терять времени, дедлайны горят, дома кот некормленный, да
        сериал недосмотренный
      </Say>

      <Scene src={bgAskBeforeFenceGif} durationMs={6000} />

      <Scene src={bgAskAfterJpg} />

      <Say image={{uri: archkot7Png, style: {width: '100%', bottom: 0}}}>
        Здание изменено до неузнаваемости, и теперь это уже не имеет отношения к
        историко-культурному наследию
      </Say>

      <Title hide={-1}>Конец игры</Title>

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
