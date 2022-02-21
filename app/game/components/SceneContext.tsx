import React from 'react'

export interface CommandT {
  skippable: boolean
  /** For how many frames is this command active */
  retainedFor: number
  complete: () => void
}

export interface SceneContextValue {
  sceneId: string
  getCommand: (frame: number) => CommandT | undefined
  registerCommand: (frame: number, command: CommandT) => void
  activeFrame: number
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
