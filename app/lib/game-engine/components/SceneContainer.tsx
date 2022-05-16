import useSize from '@react-hook/size'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {useLongPress} from 'use-long-press'
import {useStableCallback} from '~/lib'
import {Command} from './Command'
import {useGameContext} from './GameContext'
import {useSceneId} from './Scene'
import type {SceneContextValue, Statement} from './SceneContext'
import {SceneContext} from './SceneContext'

export interface SceneBackgroundComponentProps {
  containerSize: [number, number]
  /** 0 to 1 */
  enteredPercent: number
}

export interface SceneContainerProps {
  background: string | React.ComponentType<SceneBackgroundComponentProps>
  children?: React.ReactElement[] | React.ReactElement
}

export function SceneContainer({
  background,
  children: childrenProp,
}: SceneContainerProps) {
  const {focusedLocation, goToLocation, goBack, canGoBack} = useGameContext()
  const sceneId = useSceneId()
  const focusedStatementIndex =
    focusedLocation.sceneId === sceneId ? focusedLocation.statementIndex : 0

  const [commandMap] = React.useState(() => new Map<number, Statement>())
  const containerRef = React.useRef<HTMLDivElement>(null)
  const containerSize = useSize(containerRef)

  const children = React.useMemo(
    () => flattenChildren(childrenProp) as React.ReactElement[],
    [childrenProp],
  )
  const skip = useStableCallback(() => {
    const focusedCommand = commandMap.get(focusedStatementIndex)
    const entered = focusedCommand?.enter() ?? false
    // Complete entrance animation before jumping to next statementIndex
    if (!entered) {
      goToLocation(
        sceneId,
        Math.min(children.length - 1, focusedStatementIndex + 1),
      )
    }
  })
  const ctx = React.useMemo(
    (): SceneContextValue => ({
      sceneId,
      containerSize,
      registerStatement: (statementIndex, statement) => {
        commandMap.set(statementIndex, statement)
        return () => {
          commandMap.delete(statementIndex)
        }
      },
      getStatement: (statementIndex) => commandMap.get(statementIndex),
      focusedStatementIndex,
      goToStatement: (action) =>
        goToLocation(
          sceneId,
          typeof action === 'number' ? action : action(focusedStatementIndex),
        ),
      skip,
    }),
    [
      containerSize,
      sceneId,
      focusedStatementIndex,
      skip,
      commandMap,
      goToLocation,
    ],
  )

  const ignoreClickRef = React.useRef(false)
  const bindLongPress = useLongPress(
    () => {
      commandMap.get(focusedStatementIndex)?.pause()
      ignoreClickRef.current = true
    },
    {
      onFinish: () => {
        commandMap.get(focusedStatementIndex)?.resume()
      },
    },
  )

  return (
    <SceneContext.Provider value={ctx}>
      <div
        ref={containerRef}
        className="relative flex-1"
        tabIndex={-1}
        onClick={() => {
          if (ignoreClickRef.current) {
            ignoreClickRef.current = false
            return
          }

          const command = commandMap.get(focusedStatementIndex)
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
            onClick={() => goBack()}
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
                enteredPercent={(focusedStatementIndex + 1) / children.length}
              />
            )
          })()
        )}

        {containerSize[0] !== 0 &&
          children.map((child, idx) => (
            <Command key={child.key} statementIndex={idx}>
              {child}
            </Command>
          ))}
      </div>
    </SceneContext.Provider>
  )
}
