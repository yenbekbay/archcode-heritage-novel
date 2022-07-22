import {archkot1Png, archkot8Png, bgBusStop2Jpg, fencePng} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchArchkot_ProjBusStop_CheckOut() {
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
          uri: archkot1Png.src,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Я не усну спокойно, не посмотрев, что за забором
      </Say>

      <Scene src={bgBusStop2Jpg.src} />

      <Say>
        Так это ж остановка «Казмеханобр»! Мне дядя Юра, который в одном из
        цехов работал, рассказывал, её в семьдесят седьмом году ещё
        спроектировали
      </Say>

      <Say>
        Потом проект отменили, а он с парой коллег сами своими руками остановку
        собрали
      </Say>

      <Say
        image={{uri: archkot8Png.src, align: 'bottom'}}
        menu={[
          {
            label: 'Погрустить',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjBusStop_CheckOut_SocialMedia'),
          },
          {
            label: 'Собрать команду',
            onClick: (ctx) =>
              ctx.goToBranch('Archkot_ProjBusStop_CheckOut_AssembleTeam'),
          },
        ]}>
        И что же я, АрхКот, сделать-то могу?
      </Say>
    </Branch>
  )
}
