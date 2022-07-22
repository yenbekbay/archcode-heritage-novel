import {calligraphyGameOverPng} from '~/assets/game'
import {Show} from '~/lib/game-engine'

export function GameOverTitle() {
  return (
    <Show
      src={{
        uri: calligraphyGameOverPng.src,
        align: 'top',
        style: {paddingLeft: '2rem', paddingRight: '2rem', top: '5rem'},
        animation: {
          initial: {opacity: 0},
          entrance: {
            opacity: 1,
            transition: {duration: 8},
          },
          exit: {},
        },
      }}
      hide={-1}
    />
  )
}
