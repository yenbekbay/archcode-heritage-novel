import fenceSrc from '~/assets/game/fence.png'
import backgroundSrc from '~/assets/game/scene-2-fence-bg.gif'
import {Image} from '~/lib'
import {Foreground, Say} from './commands'
import {SceneBackgroundComponentProps, SceneContainer} from './components'

export const assets = [backgroundSrc, fenceSrc]

export function Scene2Fence() {
  return (
    <SceneContainer BackgroundComponent={Background}>
      <Say large auto>
        Забор в этом городе появился новый
      </Say>
      <Foreground auto fixed src={fenceSrc} />
      <Say large auto>
        Тест
      </Say>
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
