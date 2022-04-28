import React from 'react'

export interface CommandT {
  skippable: boolean
  /** For how many extra frames is this command visible */
  visibleExtra: number
  enter: () => void
}

export interface SceneContextValue {
  sceneId: SceneId
  getCommand: (frameIndex: number) => CommandT | undefined
  registerCommand: (frameIndex: number, command: CommandT) => void
  focusedFrameIndex: number
  goToFrame: React.Dispatch<React.SetStateAction<number>>
  skip: () => void
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
