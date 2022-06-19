import {
  archkot6Png,
  archkot7Png,
  bgAirportFenceGif,
  bgAirportJpg,
  bgAskAfterJpg,
  bgAskBeforeFenceGif,
  fencePng,
} from '~/assets/game'
import {Branch, Menu, Say, Scene, Show, Title} from '~/lib'

export function BranchArchkot_ProjAirport_WalkPast() {
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
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Не стоит зря терять времени, дедлайны горят, дома кот некормленный, да
        сериал недосмотренный
      </Say>

      <Scene src={bgAirportJpg} />

      <Say>Оказывается, за забором был старенький VIP терминал аэропорта…</Say>

      <Scene src={bgAirportFenceGif} durationMs={6000} />

      <Say>
        Теперь здание изменится до неузнаваемости, и уже не будет иметь
        отношения к историко-культурному наследию
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
