import React from 'react'

export interface CommandT {
  skippable: boolean
  /** For how many extra frames is this command visible */
  visibleExtra: number
  enter: () => void
}

export interface SceneContextValue {
  sceneId: SceneId
  getCommand: (frame: number) => CommandT | undefined
  registerCommand: (frame: number, command: CommandT) => void
  focusedFrame: number
  goToFrame: React.Dispatch<React.SetStateAction<number>>
  goToNextFrame: () => void
}

export const SceneContext = React.createContext<SceneContextValue | null>(null)

export function useSceneContext() {
  const ctx = React.useContext(SceneContext)
  if (!ctx) {
    throw new Error(
      '`useSceneContext` can only be used inside a SceneContainer component',
    )
  }
  return ctx
}
