import React from 'react'
import type {Frame} from '../utils'

export interface GameContextValue {
  focusedFrame: Frame
  goToScene: (sceneId: SceneId) => void
  goToFrame: (sceneId: SceneId, frameIndex: number) => void
  goBack: () => boolean
  canGoBack: () => boolean
}

export const GameContext = React.createContext<GameContextValue | null>(null)

export function useGameContext() {
  const ctx = React.useContext(GameContext)
  if (!ctx) {
    throw new Error('`useGameContext` can only be used inside a Game component')
  }
  return ctx
}
