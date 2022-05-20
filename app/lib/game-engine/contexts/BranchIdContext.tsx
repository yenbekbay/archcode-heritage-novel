import React from 'react'

export const BranchIdContext = React.createContext<BranchId | null>(null)

export interface BranchIdProviderProps {
  id: BranchId
  children?: React.ReactNode
}

export function BranchIdProvider({id, children}: BranchIdProviderProps) {
  return (
    <BranchIdContext.Provider value={id}>{children}</BranchIdContext.Provider>
  )
}

export function useBranchId() {
  const ctx = React.useContext(BranchIdContext)
  if (!ctx) {
    throw new Error('`useBranchId` can only be used inside a Branch component')
  }
  return ctx
}
