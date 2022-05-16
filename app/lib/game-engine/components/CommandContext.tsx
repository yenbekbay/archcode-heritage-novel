import React from 'react'
import type {Statement} from './SceneContext'
import {useSceneContext} from './SceneContext'

export interface CommandContextValue {
  statementIndex: number
  /** Is this the current statementIndex? */
  focused: boolean
  /** Is this statementIndex still shown but not necessarily focused? */
  visible: boolean
}

export const CommandContext = React.createContext<CommandContextValue | null>(
  null,
)

export function useCommandContext() {
  const ctx = React.useContext(CommandContext)
  if (!ctx) {
    throw new Error(
      '`useCommandContext` can only be used inside a Command component',
    )
  }
  return ctx
}

export function useRegisterStatement(command: Statement) {
  const sceneCtx = useSceneContext()
  const {statementIndex} = useCommandContext()
  React.useEffect(
    () => sceneCtx.registerStatement(statementIndex, command),
    [command, statementIndex, sceneCtx],
  )
}
