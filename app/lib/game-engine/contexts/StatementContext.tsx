import React from 'react'
import type {Statement} from './BranchContext'
import {useBranchContext} from './BranchContext'

export interface StatementContextValue {
  statementIndex: number
  statementLabel: string | null
  /** Is this the current statementIndex? */
  focused: boolean
  /** Is this statementIndex still shown but not necessarily focused? */
  visible: boolean
}

const StatementContext = React.createContext<StatementContextValue | null>(null)

export interface StatementProviderProps {
  statementIndex: number
  statementLabel?: string | null
  children: React.ReactNode
}

export function StatementProvider({
  statementIndex,
  statementLabel,
  children,
}: StatementProviderProps) {
  const branchCtx = useBranchContext()
  const statement = branchCtx.getStatement(statementIndex)
  const ctx = React.useMemo(
    (): StatementContextValue => ({
      statementIndex,
      statementLabel: statementLabel ?? null,
      focused: branchCtx.focusedStatementIndex === statementIndex,
      visible:
        branchCtx.focusedStatementIndex >= statementIndex &&
        branchCtx.focusedStatementIndex <=
          statementIndex + (statement?.visibleExtra ?? 0),
    }),
    [
      statement?.visibleExtra,
      branchCtx.focusedStatementIndex,
      statementIndex,
      statementLabel,
    ],
  )
  return (
    <StatementContext.Provider value={ctx}>
      {children}
    </StatementContext.Provider>
  )
}

export function useStatementContext() {
  const ctx = React.useContext(StatementContext)
  if (!ctx) {
    throw new Error(
      '`useStatementContext` can only be used inside a Command component',
    )
  }
  return ctx
}

export function useRegisterStatement(
  statement: Omit<Statement, 'index' | 'label'>,
) {
  const branchCtx = useBranchContext()
  const {statementIndex, statementLabel} = useStatementContext()
  React.useEffect(
    () =>
      branchCtx.registerStatement({
        ...statement,
        index: statementIndex,
        label: statementLabel,
      }),
    [statement, statementIndex, branchCtx, statementLabel],
  )
}
