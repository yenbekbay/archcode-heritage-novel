import {
  SceneBackgroundComponentProps,
  SceneContainer,
} from './components/SceneContainer'
import backgroundSrc from '~/assets/game/scene-2-fence-bg.gif'
import {Box} from '~/lib/components/Box'

export const assets = [backgroundSrc]

export function Scene2Fence() {
  return <SceneContainer BackgroundComponent={Background}></SceneContainer>
}

function Background(_props: SceneBackgroundComponentProps) {
  return (
    <Box
      as="img"
      src={backgroundSrc}
      css={{
        position: 'absolute',
        top: 0,
        height: '100%',
        objectFit: 'cover',
      }}
    />
  )
}
