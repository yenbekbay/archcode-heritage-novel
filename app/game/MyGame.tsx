import * as assets from '~/assets/game'
import type {GameProps} from './components'
import {Game, Scene} from './components'
import {SceneActivist1} from './SceneActivist1'
import {SceneActivist1_2a} from './SceneActivist1_2a'
import {SceneActivist1_2b} from './SceneActivist1_2b'
import {SceneActivist1_2b_3a} from './SceneActivist1_2b_3a'
import {SceneActivist1_2b_3b} from './SceneActivist1_2b_3b'
import {SceneActivist1_2b_3b_4a} from './SceneActivist1_2b_3b_4a'
import {SceneActivist1_2b_3b_4b} from './SceneActivist1_2b_3b_4b'
import {SceneActivist1_2b_3b_4c} from './SceneActivist1_2b_3b_4c'
import {SceneCityHall1} from './SceneCityHall1'
import {SceneCityHall1_2a} from './SceneCityHall1_2a'
import {SceneCityHall1_2a_3a} from './SceneCityHall_2a_3a'
import {SceneIntro} from './SceneIntro'

export const scenes = {
  Intro: SceneIntro,
  Activist1: SceneActivist1,
  Activist1_2a: SceneActivist1_2a,
  Activist1_2b: SceneActivist1_2b,
  Activist1_2b_3a: SceneActivist1_2b_3a,
  Activist1_2b_3b: SceneActivist1_2b_3b,
  Activist1_2b_3b_4a: SceneActivist1_2b_3b_4a,
  Activist1_2b_3b_4b: SceneActivist1_2b_3b_4b,
  Activist1_2b_3b_4c: SceneActivist1_2b_3b_4c,
  CityHall1: SceneCityHall1,
  CityHall1_2a: SceneCityHall1_2a,
  CityHall1_2a_3a: SceneCityHall1_2a_3a,
}

declare global {
  type SceneId = keyof typeof scenes
}

export function MyGame(
  props: Omit<GameProps, 'assets' | 'initialSceneId' | 'children'>,
) {
  return (
    <Game assets={Object.values(assets)} initialSceneId="Intro" {...props}>
      {Object.entries(scenes).map(([id, SceneComp]) => (
        <Scene key={id} id={id as SceneId}>
          <SceneComp />
        </Scene>
      ))}
    </Game>
  )
}
