import fenceSrc from '~/assets/game/fence.png'
import readhead1Src from '~/assets/game/readhead-1.png'
import backgroundSrc from '~/assets/game/scene-2-fence-bg.gif'
import {Image} from '~/lib'
import {Foreground, Options, Say} from './commands'
import {SceneBackgroundComponentProps, SceneContainer} from './components'

export const assets = [backgroundSrc, fenceSrc]

export function Scene2Fence() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say large autoContinue>
        Забор в этом городе появился новый
      </Say>

      <Foreground
        src={fenceSrc}
        css={{transform: 'translate(-50%) scale(1.15)'}}
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
        autoContinue
        fixed
      />

      <Foreground
        src={readhead1Src}
        css={{
          height: '50%',
          bottom: 0,
          filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
        }}
        autoContinue
        fixed
      />

      <Say large autoContinue fixed>
        Это что за забор? И что за ним?
      </Say>

      <Options
        options={[
          {
            label: 'Пройти мимо',
            action: {
              type: 'go_to_scene',
              sceneId: 'TODO',
            },
          },
          {
            label: 'Посмотреть',
            action: {
              type: 'go_to_scene',
              sceneId: 'TODO',
            },
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <Image
      src={backgroundSrc}
      css={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  )
}
