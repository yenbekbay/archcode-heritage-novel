import useSize from '@react-hook/size'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {useLongPress} from 'use-long-press'
import {useStableCallback} from '../../hooks'
import type {BranchContextValue, Statement} from '../contexts'
import {BranchContext, useGameContext, useBranchId} from '../contexts'
import {Command} from './Command'

export interface BranchBackgroundComponentProps {
  containerSize: [number, number]
  /** 0 to 1 */
  enteredPercent: number
}

export interface BranchContainerProps {
  background: string | React.ComponentType<BranchBackgroundComponentProps>
  children?: React.ReactElement[] | React.ReactElement
}

export function BranchContainer({
  background,
  children: childrenProp,
}: BranchContainerProps) {
  const {focusedLocation, goToLocation, goBack, canGoBack} = useGameContext()
  const branchId = useBranchId()
  const focusedStatementIndex =
    focusedLocation.branchId === branchId ? focusedLocation.statementIndex : 0

  const [statementByIndex] = React.useState(() => new Map<number, Statement>())
  const [statementByLabel] = React.useState(() => new Map<string, Statement>())
  const containerRef = React.useRef<HTMLDivElement>(null)
  const containerSize = useSize(containerRef)

  const statements = React.useMemo(
    () => unwrapStatements(childrenProp),
    [childrenProp],
  )
  const skip = useStableCallback(() => {
    const focusedCommand = statementByIndex.get(focusedStatementIndex)
    const entered = focusedCommand?.enter() ?? false
    // Complete entrance animation before jumping to next statementIndex
    if (!entered) {
      goToLocation(
        branchId,
        Math.min(statements.length - 1, focusedStatementIndex + 1),
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

        {typeof background === 'string' ? (
          <img src={background} className="h-full w-full object-cover" />
        ) : (
          (() => {
            const BackgroundComp = background
            return (
              <BackgroundComp
                containerSize={containerSize}
                enteredPercent={(focusedStatementIndex + 1) / statements.length}
              />
            )
          })()
        )}

        {containerSize[0] !== 0 &&
          statements.map((child, idx) => (
            <Command
              key={child.key}
              statementIndex={idx}
              statementLabel={
                child.type === Label ? (child.props as LabelProps).label : null
              }>
              {child}
            </Command>
          ))}
      </div>
    </BranchContext.Provider>
  )
}

// MARK: Label

export interface LabelProps<TStatementLabel extends string = string> {
  label: TStatementLabel
  children: React.ReactNode
}

export function Label({children}: LabelProps) {
  return <>{children}</>
}

// MARK: Helpers

function unwrapStatements(children: React.ReactNode): React.ReactElement[] {
  return flattenChildren(children)
    .filter(React.isValidElement)
    .flatMap((c) => {
      if (c.type === Label) {
        const props = c.props as LabelProps
        const subchildren = unwrapStatements(props.children)
        return [
          <Label key={props.label} label={props.label}>
            {subchildren[0]}
          </Label>,
          ...subchildren
            .slice(1)
            .map((el) =>
              React.cloneElement(el, {key: `${props.label}.${el.key}`}),
            ),
        ]
      }
      return [c]
    })
}
