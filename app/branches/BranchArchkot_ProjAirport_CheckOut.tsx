import {archkot1Png, archkot8Png, bgAirportJpg, fencePng} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchArchkot_ProjAirport_CheckOut() {
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
          uri: archkot1Png,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Я не усну спокойно, не посмотрев, что за забором
      </Say>

      <Scene src={bgAirportJpg} />

      <Say image={{uri: archkot8Png, align: 'bottom'}}>
        Вот вам новости! старенький vip-терминал аэропорта
      </Say>

      <Say image={{uri: archkot8Png, align: 'bottom'}}>
        И что теперь, снесут его?
      </Say>

      <Say>Ворота в Алматы…</Say>

      <Say>…до свидания?</Say>

      <Say
        image={{uri: archkot1Png, align: 'bottom'}}
        menu={[
          {
            label: 'Погрустить',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAirport_CheckOut_SocialMedia'),
          },
          {
            label: 'Собрать команду',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAirport_CheckOut_AssembleTeam'),
          },
        ]}>
        Что можно сделать мне, простому Архкоту?
      </Say>
    </Branch>
  )
}
