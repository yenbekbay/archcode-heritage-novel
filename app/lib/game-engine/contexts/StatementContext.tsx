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
  const ctx = React.useMemo((): StatementContextValue => {
    const visibleExtra =
      statement?.visibility === 'indefinite'
        ? Number.MAX_SAFE_INTEGER
        : Math.max(0, statement?.visibility ?? 0)
    return {
      statementIndex,
      statementLabel: statementLabel ?? null,
      focused: branchCtx.focusedStatementIndex === statementIndex,
      visible:
        branchCtx.focusedStatementIndex >= statementIndex &&
        branchCtx.focusedStatementIndex <= statementIndex + visibleExtra,
    }
  }, [
    statement?.visibility,
    statementIndex,
    statementLabel,
    branchCtx.focusedStatementIndex,
  ])
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
