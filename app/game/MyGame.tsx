import {Scene1Intro} from './Scene1Intro'
import {Scene2Fence} from './Scene2Fence'
import {Game} from './components/Game'
import {Scene} from './components/Scene'

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
