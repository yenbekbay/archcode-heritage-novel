import React from 'react'
import type {Statement} from '../utils'

export interface GameContextValue {
  focusedStatement: Statement
  paused: boolean
  goToScene: (sceneId: SceneId) => void
  goToStatement: (sceneId: SceneId, statementIndex: number) => void
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
