import React from 'react'
import type {Statement} from './BranchContext'
import {useBranchContext} from './BranchContext'

export interface StatementContextValue {
  statementIndex: number
  statementLabel: string | null
  /** Is this the current statement? */
  focused: boolean
  /** Is this statement still shown but not necessarily focused? */
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
  statementLabel = null,
  children,
}: StatementProviderProps) {
  const branchCtx = useBranchContext()
  const statement = branchCtx.getStatement(statementIndex)
  const ctx = React.useMemo((): StatementContextValue => {
    const focused = branchCtx.focusedStatementIndex === statementIndex
    let visible = focused
    if (branchCtx.focusedStatementIndex > statementIndex) {
      if (statement?.hide === -1) {
        visible = true
      } else if (typeof statement?.hide === 'number') {
        visible =
          branchCtx.focusedStatementIndex <= statementIndex + statement.hide
      } else if (typeof statement?.hide === 'function') {
        visible = true
        let currStatementIndex = statementIndex + 1
        let currStatement = branchCtx.getStatement(currStatementIndex)
        while (
          currStatementIndex <= branchCtx.focusedStatementIndex &&
          currStatement != null
        ) {
          if (statement.hide(currStatement)) {
            visible = false
            break
          } else {
            currStatementIndex += 1
            currStatement = branchCtx.getStatement(currStatementIndex)
          }
        }
      }
    }
    return {
      statementIndex,
      statementLabel,
      focused,
      visible,
    }
  }, [branchCtx, statement, statementIndex, statementLabel])
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
