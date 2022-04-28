import React from 'react'
import type {GameInstance, GameProps} from './components'
import {Game, Scene} from './components'
import {SceneActivist1, sceneActivist1Assets} from './SceneActivist1'
import {SceneActivist1_2a, sceneActivist1_2aAssets} from './SceneActivist1_2a'
import {SceneActivist1_2b, sceneActivist1_2bAssets} from './SceneActivist1_2b'
import {
  SceneActivist1_2b_3a,
  sceneActivist1_2b_3aAssets,
} from './SceneActivist1_2b_3a'
import {
  SceneActivist1_2b_3b,
  sceneActivist1_2b_3bAssets,
} from './SceneActivist1_2b_3b'
import {
  SceneActivist1_2b_3b_4a,
  sceneActivist1_2b_3b_4aAssets,
} from './SceneActivist1_2b_3b_4a'
import {
  SceneActivist1_2b_3b_4b,
  sceneActivist1_2b_3b_4bAssets,
} from './SceneActivist1_2b_3b_4b'
import {
  SceneActivist1_2b_3b_4c,
  sceneActivist1_2b_3b_4cAssets,
} from './SceneActivist1_2b_3b_4c'
import {SceneCityHall1, sceneCityHall1Assets} from './SceneCityHall1'
import {introAssets, SceneIntro} from './SceneIntro'

export const assets = [
  ...new Set([
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
  ]),
]

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
  props: Omit<GameProps, 'assets' | 'initialSceneId' | 'children'>,
  forwardedRef: React.ForwardedRef<GameInstance>,
) {
  return (
    <Game ref={forwardedRef} assets={assets} initialSceneId="Intro" {...props}>
      {Object.entries(scenes).map(([id, SceneComp]) => (
        <Scene key={id} id={id as SceneId}>
          <SceneComp />
        </Scene>
      ))}
    </Game>
  )
})
