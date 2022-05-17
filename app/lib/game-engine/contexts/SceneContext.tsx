import React from 'react'

export interface Statement {
  index: number
  label: string | null
  skippable: boolean
  /** For how many extra statements is this command visible */
  visibleExtra: number
  enter: () => void
  pause: () => void
  resume: () => void
}

export interface SceneContextValue<TStatementLabel extends string = string> {
  sceneId: SceneId
  containerSize: [number, number]
  registerStatement: (statement: Statement) => void
  getStatement: (statementIndex: number) => Statement | undefined
  focusedStatementIndex: number
  goToStatement: (statementLabel: TStatementLabel) => void
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
