import React from 'react'
import {Game, GameInstance, Scene} from './components'
import {Scene1, assets as scene1Assets} from './Scene1'
import {Scene2, assets as scene3Assets} from './Scene2'
import {Scene3A, assets as scene3AAssets} from './Scene3A'
import {Scene3B, assets as scene3BAssets} from './Scene3B'
import {Scene4A, assets as scene4AAssets} from './Scene4A'
import {Scene4B, assets as scene4BAssets} from './Scene4B'
import {Scene5A, assets as scene5AAssets} from './Scene5A'
import {Scene5B, assets as scene5BAssets} from './Scene5B'

export const assets = [
  ...scene1Assets,
  ...scene3Assets,
  ...scene3AAssets,
  ...scene3BAssets,
  ...scene4AAssets,
  ...scene4BAssets,
  ...scene5AAssets,
  ...scene5BAssets,
]

export const MyGame = React.forwardRef(
  (_props, forwardedRef: React.ForwardedRef<GameInstance>) => {
    return (
      <Game ref={forwardedRef} initialSceneId="1">
        <Scene id="1">
          <Scene1 />
        </Scene>

        <Scene id="2">
          <Scene2 />
        </Scene>

        <Scene id="3A">
          <Scene3A />
        </Scene>

        <Scene id="3B">
          <Scene3B />
        </Scene>

        <Scene id="4A">
          <Scene4A />
        </Scene>

        <Scene id="4B">
          <Scene4B />
        </Scene>

        <Scene id="5A">
          <Scene5A />
        </Scene>

        <Scene id="5B">
          <Scene5B />
        </Scene>
      </Game>
    )
  },
)
