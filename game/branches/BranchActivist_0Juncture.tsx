import {
  bgMapGif,
  fenceMp3,
  fencePng,
  heartbeatMp3,
  redhead1Png,
} from '~/assets/game'
import {Branch, Play, Say, Scene, Show} from '~/lib/game-engine'

export function BranchActivist_0Juncture() {
  return (
    <Branch>
      <Play audio={{uri: heartbeatMp3, loop: true}} hide={2} />

      <Scene src={bgMapGif.src} />

      <Say>Забор в этом городе появился новый</Say>

      <Show
        src={{
          uri: fencePng.src,
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
        audio={fenceMp3}
        hide={-1}
      />

      <Say
        image={{
          uri: redhead1Png.src,
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