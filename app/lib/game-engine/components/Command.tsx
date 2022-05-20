import React from 'react'
import type {CommandContextValue} from '../contexts'
import {CommandContext, useBranchContext} from '../contexts'

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
  const branchCtx = useBranchContext()
  const command = branchCtx.getStatement(statementIndex)
  const commandCtx = React.useMemo(
    (): CommandContextValue => ({
      statementIndex,
      statementLabel: statementLabel ?? null,
      focused: branchCtx.focusedStatementIndex === statementIndex,
      visible:
        branchCtx.focusedStatementIndex >= statementIndex &&
        branchCtx.focusedStatementIndex <=
          statementIndex + (command?.visibleExtra ?? 0),
    }),
    [
      command?.visibleExtra,
      branchCtx.focusedStatementIndex,
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
