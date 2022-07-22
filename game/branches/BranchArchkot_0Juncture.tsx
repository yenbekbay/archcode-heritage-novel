import {
  archkot5Png,
  bgMapGif,
  fenceOgg,
  fencePng,
  heartbeatOgg,
} from '~/assets/game'
import {Branch, Play, Say, Scene, Show} from '~/lib/game-engine'

export function BranchArchkot_0Juncture() {
  return (
    <Branch>
      <Play audio={{uri: heartbeatOgg, loop: true}} hide={2} />

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
        audio={fenceOgg}
        hide={-1}
      />

      <Say
        image={{
          uri: archkot5Png.src,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        menu={[
          {
            label: 'Пройти мимо',
            onClick: (ctx) => {
              const options: BranchId[] = [
                'Archkot_ProjAsk_WalkPast',
                'Archkot_ProjAirport_WalkPast',
                'Archkot_ProjBusStop_WalkPast',
              ]
              return ctx.goToBranch(
                options[Math.floor(Math.random() * options.length)],
              )
            },
          },
          {
            label: 'Посмотреть',
            onClick: (ctx) => {
              const options: BranchId[] = [
                'Archkot_ProjAsk_CheckOut',
                'Archkot_ProjAirport_CheckOut',
                'Archkot_ProjBusStop_CheckOut',
              ]
              ctx.goToBranch(
                options[Math.floor(Math.random() * options.length)],
              )
            },
          },
        ]}>
        Возмутительно это конечно, никакого паспорта объекта!
      </Say>
    </Branch>
  )
}
