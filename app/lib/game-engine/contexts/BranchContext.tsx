import useSize from '@react-hook/size'
import React from 'react'
import {useLongPress} from 'use-long-press'
import {useStableCallback} from '~/lib/hooks'
import {useGameContext} from './GameContext'

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

const BranchContext = React.createContext<BranchContextValue | null>(null)

export interface BranchProviderProps {
  branchId: BranchId
  children: React.ReactNode
}

export function BranchProvider({branchId, children}: BranchProviderProps) {
  const {focusedLocation, goToLocation, goBack, canGoBack} = useGameContext()
  const focusedStatementIndex =
    focusedLocation.branchId === branchId ? focusedLocation.statementIndex : 0

  const [statementByIndex] = React.useState(() => new Map<number, Statement>())
  const [statementByLabel] = React.useState(() => new Map<string, Statement>())
  const containerRef = React.useRef<HTMLDivElement>(null)
  const containerSize = useSize(containerRef)

  const skip = useStableCallback(() => {
    const focusedCommand = statementByIndex.get(focusedStatementIndex)
    const entered = focusedCommand?.enter() ?? false
    // Complete entrance animation before jumping to next statementIndex
    if (!entered) {
      goToLocation(
        branchId,
        Math.min(statementByIndex.size - 1, focusedStatementIndex + 1),
      )
    }
  })
  const ctx = React.useMemo(
    (): BranchContextValue => ({
      branchId,
      containerSize,
      registerStatement: (statement) => {
        statementByIndex.set(statement.index, statement)
        if (statement.label) {
          if (statementByLabel.has(statement.label)) {
            throw new Error(`Duplicate statement label: ${statement.label}`)
          }
          statementByLabel.set(statement.label, statement)
        }
        return () => {
          statementByIndex.delete(statement.index)
          if (statement.label) {
            statementByLabel.delete(statement.label)
          }
        }
      },
      getStatement: (statementIndex) => statementByIndex.get(statementIndex),
      focusedStatementIndex,
      goToStatement: (statementLabel) => {
        const statement = statementByLabel.get(statementLabel)
        if (!statement) {
          throw new Error(`Unknown statement label: ${statementLabel}`)
        }
        goToLocation(branchId, statement?.index)
      },
      skip,
    }),
    [
      branchId,
      containerSize,
      focusedStatementIndex,
      skip,
      statementByIndex,
      statementByLabel,
      goToLocation,
    ],
  )

  const ignoreClickRef = React.useRef(false)
  const bindLongPress = useLongPress(
    () => {
      statementByIndex.get(focusedStatementIndex)?.pause()
      ignoreClickRef.current = true
    },
    {
      onFinish: () => {
        statementByIndex.get(focusedStatementIndex)?.resume()
      },
    },
  )

  return (
    <BranchContext.Provider value={ctx}>
      <div
        ref={containerRef}
        className="relative flex-1"
        tabIndex={-1}
        onClick={() => {
          if (ignoreClickRef.current) {
            ignoreClickRef.current = false
            return
          }

          const command = statementByIndex.get(focusedStatementIndex)
          if (command?.skippable) {
            skip()
          }
        }}
        {...bindLongPress()}>
        {canGoBack() && (
          <div
            className="absolute left-0 z-50 h-full w-16 cursor-pointer from-current to-transparent hover:bg-gradient-to-r"
            style={{color: 'rgba(0, 0, 0, .35)'}}
            tabIndex={-1}
            onClick={(event) => {
              goBack()
              event.stopPropagation()
            }}
          />
        )}

        {children}
      </div>
    </BranchContext.Provider>
  )
}

export function useBranchContext() {
  const ctx = React.useContext(BranchContext)
  if (!ctx) {
    throw new Error(
      '`useBranchContext` can only be used inside a BranchContainer component',
    )
  }
  return ctx
}
