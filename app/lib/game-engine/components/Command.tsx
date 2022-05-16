import React from 'react'
import type {CommandContextValue} from './CommandContext'
import {CommandContext} from './CommandContext'
import {useSceneContext} from './SceneContext'

export interface CommandProps {
  statementIndex: number
  children: React.ReactNode
}

export function Command({statementIndex, children}: CommandProps) {
  const sceneCtx = useSceneContext()
  const command = sceneCtx.getStatement(statementIndex)
  const commandCtx = React.useMemo(
    (): CommandContextValue => ({
      statementIndex,
      focused: sceneCtx.focusedStatementIndex === statementIndex,
      visible:
        sceneCtx.focusedStatementIndex >= statementIndex &&
        sceneCtx.focusedStatementIndex <=
          statementIndex + (command?.visibleExtra ?? 0),
    }),
    [command?.visibleExtra, sceneCtx.focusedStatementIndex, statementIndex],
  )
  return (
    <CommandContext.Provider value={commandCtx}>
      {children}
    </CommandContext.Provider>
  )
}
