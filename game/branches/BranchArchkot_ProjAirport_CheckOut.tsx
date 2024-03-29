import {
  archkot1Png,
  archkot8Png,
  bgAirportJpg,
  fenceMp3,
  fencePng,
} from 'assets/game'
import {Branch, Say, Scene, Show} from 'react-visual-novel'
import {SCENE_AUDIO} from '../sounds'

export function BranchArchkot_ProjAirport_CheckOut() {
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
          uri: archkot1Png.src,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}
      >
        Я не усну спокойно, не посмотрев, что за забором
      </Say>

      <Scene src={bgAirportJpg.src} audio={SCENE_AUDIO.city} />

      <Say image={{uri: archkot8Png.src, align: 'bottom'}}>
        Вот вам новости! старенький vip-терминал аэропорта
      </Say>

      <Say image={{uri: archkot8Png.src, align: 'bottom'}}>
        И что теперь, снесут его?
      </Say>

      <Say>Ворота в Аталму…</Say>

      <Say>…до свидания?</Say>

      <Say
        image={{uri: archkot1Png.src, align: 'bottom'}}
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
        ]}
      >
        Что можно сделать мне, простому Архкоту?
      </Say>
    </Branch>
  )
}
