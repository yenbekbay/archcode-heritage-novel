import {bgMapGif, fencePng, redhead1Png} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchActivist_0Juncture() {
  return (
    <Branch>
      <Scene src={bgMapGif} />

      <Say>Забор в этом городе появился новый</Say>

      <Show
        src={{
          uri: fencePng,
          style: {height: '100%', transform: 'translate(-50%) scale(1.15)'},
          animation: {
            initial: {x: '250%', scale: 0.5, originY: 1},
            entrance: {
              x: 0,
              scale: 1,
              transition: {duration: 2},
            },
            exit: {
              opacity: 0,
              transition: {duration: 0.5, ease: 'easeOut'},
            },
          },
        }}
        hide={-1}
      />

      <Say
        image={{
          uri: redhead1Png,
          align: 'bottom',
          style: {
            filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
          },
        }}
        menu={[
          {
            label: 'Пройти мимо',
            onClick: (ctx) => ctx.goToBranch('Activist_WalkPast'),
          },
          {
            label: 'Посмотреть',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut'),
          },
        ]}>
        Это что за забор? И что за ним?
      </Say>
    </Branch>
  )
}
