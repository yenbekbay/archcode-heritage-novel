import React from 'react'

export interface CommandT {
  skippable: boolean
  /** For how many extra statements is this command visible */
  visibleExtra: number
  enter: () => void
  pause: () => void
  resume: () => void
}

export interface SceneContextValue {
  sceneId: SceneId
  containerSize: [number, number]
  registerCommand: (statementIndex: number, command: CommandT) => void
  getCommand: (statementIndex: number) => CommandT | undefined
  focusedStatementIndex: number
  goToStatement: React.Dispatch<React.SetStateAction<number>>
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
