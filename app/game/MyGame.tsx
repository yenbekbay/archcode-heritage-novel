import {Game, Scene} from './components'
import {assets as scene1Assets, Scene1Intro} from './Scene1Intro'
import {assets as scene2Assets, Scene2Fence} from './Scene2Fence'

export const assets = [...scene1Assets, ...scene2Assets]

export function MyGame() {
  return (
    <Game initialSceneId="Intro">
      <Scene id="Intro">
        <Scene1Intro />
      </Scene>

      <Scene id="Fence">
        <Scene2Fence />
      </Scene>
    </Game>
  )
}
