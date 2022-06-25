import {
  archkot1Png,
  archkot2Png,
  archkot8Png,
  bgAskBeforeJpg,
  fencePng,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchArchkot_ProjAsk_CheckOut() {
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

      <Scene src={bgAskBeforeJpg} />

      <Say image={{uri: archkot8Png, align: 'bottom'}}>
        Что за напасть! Здание аппаратно-студийного комплекса перестроить решили
      </Say>

      <Say image={{uri: archkot2Png, align: 'bottom'}}>
        А я был здесь ребенком ещё, у мамы на работе, мне по лестницам этим так
        бегать нравилось
      </Say>

      <Say
        image={{uri: archkot1Png, align: 'bottom'}}
        menu={[
          {
            label: 'Погрустить',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAsk_CheckOut_SocialMedia'),
          },
          {
            label: 'Собрать команду',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjAsk_CheckOut_AssembleTeam'),
          },
        ]}>
        Что можно сделать мне, простому АрхКоту?
      </Say>
    </Branch>
  )
}
