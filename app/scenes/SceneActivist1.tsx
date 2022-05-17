import {bgMapGif, bgMapJpg, fencePng, redhead1Png} from '~/assets/game'
import type {SceneBackgroundComponentProps} from '~/lib'
import {makeScene} from '~/lib'

const Scene = makeScene()

export function SceneActivist1() {
  return (
    <Scene.Container background={Background}>
      <Scene.Say size="lg" transitory>
        Забор в этом городе появился новый
      </Scene.Say>

      <Scene.Foreground
        src={fencePng}
        style={{height: '100%', transform: 'translate(-50%) scale(1.15)'}}
        variants={{
          initial: {x: '250%', scale: 0.5, originY: 1},
          entrance: {
            x: 0,
            scale: 1,
            transition: {delay: 0.5, duration: 2},
          },
          exit: {
            opacity: 0,
            transition: {duration: 0.5, ease: 'easeOut'},
          },
        }}
        transitory
        lingers
      />

      <Scene.Say
        size="lg"
        foregroundSrc={redhead1Png}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        transitory
        durationMs={0}
        lingers={1}>
        Это что за забор? И что за ним?
      </Scene.Say>

      <Scene.Choices
        variant="dark"
        choices={[
          {
            label: 'Пройти мимо',
            onClick: (ctx) => ctx.goToScene('Activist1_2a'),
          },
          {
            label: 'Посмотреть',
            onClick: (ctx) => ctx.goToScene('Activist1_2b'),
          },
        ]}
      />
    </Scene.Container>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  const {focusedStatementIndex} = Scene.useSceneContext()
  return (
    <img
      src={focusedStatementIndex < 2 ? bgMapGif : bgMapJpg}
      className="h-full w-full object-cover"
    />
  )
}
