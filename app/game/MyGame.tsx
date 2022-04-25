import React from 'react'
import type {GameInstance} from './components'
import {Game, Scene} from './components'
import {
  assets as SceneActivist1_2Assets,
  SceneActivist1,
} from './SceneActivist1'
import {
  assets as SceneActivist1_2aAssets,
  SceneActivist1_2a,
} from './SceneActivist1_2a'
import {
  assets as SceneActivist1_2bAssets,
  SceneActivist1_2b,
} from './SceneActivist1_2b'
import {
  assets as SceneActivist1_2b_3aAssets,
  SceneActivist1_2b_3a,
} from './SceneActivist1_2b_3a'
import {
  assets as SceneActivist1_2b_3bAssets,
  SceneActivist1_2b_3b,
} from './SceneActivist1_2b_3b'
import {
  assets as SceneActivist1_2b_3b_4aAssets,
  SceneActivist1_2b_3b_4a,
} from './SceneActivist1_2b_3b_4a'
import {
  assets as SceneActivist1_2b_3b_4bAssets,
  SceneActivist1_2b_3b_4b,
} from './SceneActivist1_2b_3b_4b'
import {
  assets as SceneActivist1_2b_3b_4cAssets,
  SceneActivist1_2b_3b_4c,
} from './SceneActivist1_2b_3b_4c'
import {assets as SceneIntroAssets, SceneIntro} from './SceneIntro'

export const assets = [
  ...SceneIntroAssets,
  ...SceneActivist1_2Assets,
  ...SceneActivist1_2aAssets,
  ...SceneActivist1_2bAssets,
  ...SceneActivist1_2b_3aAssets,
  ...SceneActivist1_2b_3bAssets,
  ...SceneActivist1_2b_3b_4aAssets,
  ...SceneActivist1_2b_3b_4bAssets,
  ...SceneActivist1_2b_3b_4cAssets,
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
