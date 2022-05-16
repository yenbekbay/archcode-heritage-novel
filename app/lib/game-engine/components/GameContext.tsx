import React from 'react'
import type {GameLocation} from '../utils'

export interface GameContextValue {
  focusedLocation: GameLocation
  paused: boolean
  goToScene: (sceneId: SceneId) => void
  goToLocation: (sceneId: SceneId, statementIndex: number) => void
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
