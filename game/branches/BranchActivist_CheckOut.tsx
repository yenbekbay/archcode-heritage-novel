import {
  bgZheltoksanBeforeFenceGif,
  fencePng,
  redhead2Png,
  redhead4Png,
} from '~/assets/game'
import {Branch, Say, Scene, Show} from '~/lib/game-engine'

export function BranchActivist_CheckOut() {
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
          uri: redhead4Png.src,
          align: 'bottom',
          style: {filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))'},
        }}
        zIndex={101}>
        Мутят что-то без доклада народу. Надо разобраться!
      </Say>

      <Scene src={bgZheltoksanBeforeFenceGif.src} durationMs={6000} />

      <Say
        image={{uri: redhead2Png.src, align: 'bottom'}}
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
