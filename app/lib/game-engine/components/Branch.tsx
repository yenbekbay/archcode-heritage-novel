import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {StatementProvider, useBranchContext} from '../contexts'

export interface BranchBackgroundComponentProps {
  containerSize: [number, number]
  /** 0 to 1 */
  enteredPercent: number
}

export interface BranchProps {
  background: string | React.ComponentType<BranchBackgroundComponentProps>
  children?: React.ReactElement[] | React.ReactElement
}

export function Branch({background, children: childrenProp}: BranchProps) {
  const {containerSize, focusedStatementIndex} = useBranchContext()
  const statements = React.useMemo(
    () => unwrapStatements(childrenProp),
    [childrenProp],
  )
  return (
    <>
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
          <StatementProvider
            key={child.key}
            statementIndex={idx}
            statementLabel={
              child.type === Label ? (child.props as LabelProps).label : null
            }>
            {child}
          </StatementProvider>
        ))}
    </>
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
