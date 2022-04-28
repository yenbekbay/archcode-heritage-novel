import useSize from '@react-hook/size'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {useStableCallback} from '~/lib'
import {Command} from './Command'
import {useGameContext} from './GameContext'
import {useSceneId} from './Scene'
import type {CommandT, SceneContextValue} from './SceneContext'
import {SceneContext} from './SceneContext'

export interface SceneBackgroundComponentProps {
  containerSize: [number, number]
  /** 0 to 1 */
  enteredPercent: number
}

export interface SceneContainerProps {
  BackgroundComponent?: React.ComponentType<SceneBackgroundComponentProps>
  children?: React.ReactElement[] | React.ReactElement
}

export function SceneContainer({
  BackgroundComponent,
  children: childrenProp,
}: SceneContainerProps) {
  const {focusedFrame, goToFrame} = useGameContext()
  const sceneId = useSceneId()
  const focusedFrameIndex =
    focusedFrame.sceneId === sceneId ? focusedFrame.frameIndex : 0

  const [commandMap] = React.useState(() => new Map<number, CommandT>())
  const containerRef = React.useRef<HTMLDivElement>(null)
  const containerSize = useSize(containerRef)

  const children = React.useMemo(
    () => flattenChildren(childrenProp) as React.ReactElement[],
    [childrenProp],
  )
  const skip = useStableCallback(() => {
    const focusedCommand = commandMap.get(focusedFrameIndex)
    const entered = focusedCommand?.enter() ?? false
    // Complete entrance animation before jumping to next frameIndex
    if (!entered) {
      goToFrame(sceneId, Math.min(children.length - 1, focusedFrameIndex + 1))
    }
  })
  const ctx = React.useMemo(
    (): SceneContextValue => ({
      sceneId,
      getCommand(frameIndex) {
        return commandMap.get(frameIndex)
      },
      registerCommand(frameIndex, command) {
        commandMap.set(frameIndex, command)
        return () => {
          commandMap.delete(frameIndex)
        }
      },
      focusedFrameIndex,
      goToFrame(action) {
        return goToFrame(
          sceneId,
          typeof action === 'number' ? action : action(focusedFrameIndex),
        )
      },
      skip,
    }),
    [focusedFrameIndex, commandMap, goToFrame, skip, sceneId],
  )

  return (
    <SceneContext.Provider value={ctx}>
      <div
        ref={containerRef}
        className="relative flex-1"
        tabIndex={-1}
        onClick={() => {
          const command = commandMap.get(focusedFrameIndex)
          if (command?.skippable) {
            skip()
          }
        }}>
        {BackgroundComponent && (
          <div className="absolute inset-0 flex flex-col">
            <BackgroundComponent
              containerSize={containerSize}
              enteredPercent={(focusedFrameIndex + 1) / children.length}
            />
          </div>
        )}

        {children.map((child, idx) => (
          <Command key={child.key} frameIndex={idx}>
            {child}
          </Command>
        ))}
      </div>
    </SceneContext.Provider>
  )
}
