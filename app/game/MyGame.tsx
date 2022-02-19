import {Game, Scene} from './components'
import {Scene1, assets as scene1Assets} from './Scene1'
import {Scene2, assets as scene2Assets} from './Scene2'
import {Scene2_1, assets as scene2_1Assets} from './Scene2_1'

export const assets = [...scene1Assets, ...scene2Assets, ...scene2_1Assets]

export function MyGame() {
  return (
    <Game initialSceneId="1">
      <Scene id="1">
        <Scene1 />
      </Scene>

      <Scene id="2">
        <Scene2 />
      </Scene>

      <Scene id="2.1">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <Scene2_1 />
      </Scene>
    </Game>
  )
}
