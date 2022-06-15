import {
  bgBldgAFenceGif,
  fencePng,
  redhead2Png,
  redhead4Png,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib'

export function BranchActivist_CheckOut() {
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
        visibility={1}
        zIndex={100}
      />

      <Say
        image={{
          uri: redhead4Png,
          style: {
            width: '100%',
            bottom: 0,
            filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
          },
        }}
        zIndex={101}>
        Мутят что-то без доклада народу. Надо разобраться!
      </Say>

      <Scene src={bgBldgAFenceGif} durationMs={10000} />

      <Say
        image={{
          uri: redhead2Png,
          style: {width: '100%', bottom: 0},
        }}
        menu={[
          {
            label: 'Как-то печально всё это',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_SocialMedia'),
          },
          {
            label: 'Что я могу сделать?',
            onClick: (ctx) => ctx.goToBranch('Activist_CheckOut_Act'),
          },
        ]}>
        Это что за новости?!?! Уничтожают историю, значит?
      </Say>
    </Branch>
  )
}
