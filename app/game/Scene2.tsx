import bgMapGifSrc from '~/assets/game/bg-map.gif'
import bgMapStaticSrc from '~/assets/game/bg-map.png'
import fenceSrc from '~/assets/game/fence.png'
import redhead1Src from '~/assets/game/redhead-1.png'
import {Image} from '~/lib'
import {Foreground, Say} from './commands'
import {
  SceneBackgroundComponentProps,
  SceneContainer,
  useSceneContext,
} from './components'

export const assets = [bgMapGifSrc, bgMapStaticSrc, fenceSrc, redhead1Src]

export function Scene2() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say large transitory>
        Забор в этом городе появился новый
      </Say>

      <Foreground
        src={fenceSrc}
        css={{height: '100%', transform: 'translate(-50%) scale(1.15)'}}
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
            onClick: (ctx) => ctx.goToScene('3A'),
          },
          {
            label: 'Посмотреть',
            onClick: (ctx) => ctx.goToScene('3B'),
          },
        ]}
        foregroundSrc={redhead1Src}
        foregroundCss={{
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
    <Image
      src={activeFrame < 2 ? bgMapGifSrc : bgMapStaticSrc}
      css={{flex: 0, minHeight: '100%', objectFit: 'cover'}}
    />
  )
}
