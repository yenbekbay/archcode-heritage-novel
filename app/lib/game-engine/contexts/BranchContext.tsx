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

export interface BranchContextValue<TStatementLabel extends string = string> {
  branchId: BranchId
  containerSize: [number, number]
  registerStatement: (statement: Statement) => void
  getStatement: (statementIndex: number) => Statement | undefined
  focusedStatementIndex: number
  goToStatement: (statementLabel: TStatementLabel) => void
  skip: () => void
}

export const BranchContext = React.createContext<BranchContextValue | null>(
  null,
)

export function useBranchContext() {
  const ctx = React.useContext(BranchContext)
  if (!ctx) {
    throw new Error(
      '`useBranchContext` can only be used inside a BranchContainer component',
    )
  }
  return ctx
}
