import animatedBackgroundSrc from '~/assets/game/bg-2.gif'
import staticBackgroundSrc from '~/assets/game/bg-2.png'
import fenceSrc from '~/assets/game/fence.png'
import readhead1Src from '~/assets/game/readhead-1.png'
import {Image} from '~/lib'
import {Foreground, Options, Say} from './commands'
import {
  SceneBackgroundComponentProps,
  SceneContainer,
  useSceneContext,
} from './components'

export const assets = [animatedBackgroundSrc, staticBackgroundSrc, fenceSrc]

export function Scene2() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say large autoContinue>
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
        autoContinue
        retain
      />

      <Say
        large
        foregroundSrc={readhead1Src}
        foregroundCss={{width: '90%'}}
        autoContinue
        retain>
        Это что за забор? И что за ним?
      </Say>

      <Options
        options={[
          {
            label: 'Пройти мимо',
            action: {
              type: 'go_to_scene',
              sceneId: '2.1',
            },
          },
          {
            label: 'Посмотреть',
            action: {
              type: 'go_to_scene',
              sceneId: '2.2',
            },
          },
        ]}
      />
    </SceneContainer>
  )
}

function Background(_props: SceneBackgroundComponentProps) {
  const {activeFrame} = useSceneContext()
  return (
    <Image
      src={activeFrame < 2 ? animatedBackgroundSrc : staticBackgroundSrc}
      css={{flex: 0, minHeight: '100%', objectFit: 'cover'}}
    />
  )
}
