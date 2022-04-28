import React from 'react'
import type {GameInstance} from './components'
import {Game, Scene} from './components'
import {sceneActivist1Assets, SceneActivist1} from './SceneActivist1'
import {sceneActivist1_2aAssets, SceneActivist1_2a} from './SceneActivist1_2a'
import {sceneActivist1_2bAssets, SceneActivist1_2b} from './SceneActivist1_2b'
import {
  sceneActivist1_2b_3aAssets,
  SceneActivist1_2b_3a,
} from './SceneActivist1_2b_3a'
import {
  sceneActivist1_2b_3bAssets,
  SceneActivist1_2b_3b,
} from './SceneActivist1_2b_3b'
import {
  sceneActivist1_2b_3b_4aAssets,
  SceneActivist1_2b_3b_4a,
} from './SceneActivist1_2b_3b_4a'
import {
  sceneActivist1_2b_3b_4bAssets,
  SceneActivist1_2b_3b_4b,
} from './SceneActivist1_2b_3b_4b'
import {
  sceneActivist1_2b_3b_4cAssets,
  SceneActivist1_2b_3b_4c,
} from './SceneActivist1_2b_3b_4c'
import {sceneCityHall1Assets, SceneCityHall1} from './SceneCityHall1'
import {introAssets, SceneIntro} from './SceneIntro'

export const assets = new Set([
  ...introAssets,
  ...sceneActivist1Assets,
  ...sceneActivist1_2aAssets,
  ...sceneActivist1_2bAssets,
  ...sceneActivist1_2b_3aAssets,
  ...sceneActivist1_2b_3bAssets,
  ...sceneActivist1_2b_3b_4aAssets,
  ...sceneActivist1_2b_3b_4bAssets,
  ...sceneActivist1_2b_3b_4cAssets,
  ...sceneCityHall1Assets,
])

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
}

declare global {
  type SceneId = keyof typeof scenes
}

export const MyGame = React.forwardRef(function MyGame(
  _props,
  forwardedRef: React.ForwardedRef<GameInstance>,
) {
  return (
    <Game ref={forwardedRef} initialSceneId="Intro">
      {Object.entries(scenes).map(([id, SceneComp]) => (
        <Scene key={id} id={id as SceneId}>
          <SceneComp />
        </Scene>
      ))}
    </Game>
  )
})
