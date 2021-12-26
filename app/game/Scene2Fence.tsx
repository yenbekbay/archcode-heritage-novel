import {
  SceneBackgroundComponentProps,
  SceneContainer,
} from './components/SceneContainer'
import React from 'react'
import backgroundSrc from '~/assets/game/scene-2-fence-bg.gif'
import {Box} from '~/styles/Box'

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
