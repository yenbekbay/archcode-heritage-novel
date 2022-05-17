import React from 'react'
import type {CommandContextValue} from '../contexts'
import {CommandContext, useSceneContext} from '../contexts'

export interface CommandProps {
  statementIndex: number
  statementLabel?: string | null
  children: React.ReactNode
}

export function Command({
  statementIndex,
  statementLabel,
  children,
}: CommandProps) {
  const sceneCtx = useSceneContext()
  const command = sceneCtx.getStatement(statementIndex)
  const commandCtx = React.useMemo(
    (): CommandContextValue => ({
      statementIndex,
      statementLabel: statementLabel ?? null,
      focused: sceneCtx.focusedStatementIndex === statementIndex,
      visible:
        sceneCtx.focusedStatementIndex >= statementIndex &&
        sceneCtx.focusedStatementIndex <=
          statementIndex + (command?.visibleExtra ?? 0),
    }),
    [
      command?.visibleExtra,
      sceneCtx.focusedStatementIndex,
      statementIndex,
      statementLabel,
    ],
  )
  return (
    <CommandContext.Provider value={commandCtx}>
      {children}
    </CommandContext.Provider>
  )
}
