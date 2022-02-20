import {Game, Scene} from './components'
import {Scene1, assets as scene1Assets} from './Scene1'
import {Scene2, assets as scene3Assets} from './Scene2'
import {Scene3A, assets as scene3AAssets} from './Scene3A'
import {Scene3B, assets as scene3BAssets} from './Scene3B'
import {Scene4A, assets as scene4AAssets} from './Scene4A'

export const assets = [
  ...scene1Assets,
  ...scene3Assets,
  ...scene3AAssets,
  ...scene3BAssets,
  ...scene4AAssets,
]

export function MyGame() {
  return (
    <Game initialSceneId="1">
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
    </Game>
  )
}
