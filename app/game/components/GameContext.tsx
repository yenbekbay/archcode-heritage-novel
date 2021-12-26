import React from 'react'

export interface GameContextValue {
  goToScene: (id: string) => void
}

export const GameContext = React.createContext<GameContextValue | null>(null)

export function useGameContext() {
  const ctx = React.useContext(GameContext)
  if (!ctx) {
    throw new Error('`useGameContext` can only be used inside a Game component')
  }
  return ctx
}
