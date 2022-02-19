import React from 'react'

export interface CommandT {
  /** For how many frames is this command visible */
  retainFor: number
  complete: () => void
}

export interface SceneContextValue {
  commandMap: Map<number, CommandT>
  registerCommand: (index: number, command: CommandT) => () => void
  completeActiveCommand: () => boolean
  activeFrame: number
  setActiveFrame: React.Dispatch<React.SetStateAction<number>>
}

export const SceneContext = React.createContext<SceneContextValue | null>(null)

export function useSceneContext() {
  const ctx = React.useContext(SceneContext)
  if (!ctx) {
    throw new Error(
      '`useSceneContext` can only be used inside a Scene component',
    )
  }
  return ctx
}
