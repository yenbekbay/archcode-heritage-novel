import bgMapGifSrc from '~/assets/game/bg-map.gif'
import bgMapStaticSrc from '~/assets/game/bg-map.png'
import fenceSrc from '~/assets/game/fence.png'
import redhead1Src from '~/assets/game/redhead-1.png'
import {Foreground, Say} from './commands'
import type {SceneBackgroundComponentProps} from './components'
import {SceneContainer, useSceneContext} from './components'

export const sceneActivist1Assets = [
  bgMapGifSrc,
  bgMapStaticSrc,
  fenceSrc,
  redhead1Src,
]

export function SceneActivist1() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say large transitory>
        Забор в этом городе появился новый
      </Say>

      <Foreground
        src={fenceSrc}
        style={{height: '100%', transform: 'translate(-50%) scale(1.15)'}}
        variants={{
          initial: {x: '250%', scale: 0.5, originY: 1},
          mount: {
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
        retained
      />

      <Say
        large
        optionsDark
        optionsBottom={[
          {
            label: 'Пройти мимо',
            onClick: (ctx) => ctx.goToScene('Activist1_2a'),
          },
          {
            label: 'Посмотреть',
            onClick: (ctx) => ctx.goToScene('Activist1_2b'),
          },
        ]}
        foregroundSrc={redhead1Src}
        foregroundStyle={{
          width: '90%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}>
        Это что за забор? И что за ним?
      </Say>
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  const {activeFrame} = useSceneContext()
  return (
    <img
      src={activeFrame < 2 ? bgMapGifSrc : bgMapStaticSrc}
      className="flex-shrink-1 min-h-full flex-grow-0 basis-0 object-cover "
    />
  )
}
