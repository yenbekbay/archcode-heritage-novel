import useSize from '@react-hook/size'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {useSyncedRef} from '@react-hookz/web'
import {useSearchParam, useStableCallback} from '~/lib'
import {Command} from './Command'
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
  const sceneId = useSceneId()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const containerSize = useSize(containerRef)
  const children = React.useMemo(
    () => flattenChildren(childrenProp) as React.ReactElement[],
    [childrenProp],
  )
  const [commandMap] = React.useState(() => new Map<number, CommandT>())
  const [focusedFrame, goToFrame] = useFocusedFrame(sceneId)
  const goToNextFrame = useStableCallback(() => {
    const focusedCommand = commandMap.get(focusedFrame)
    const entered = focusedCommand?.enter() ?? false
    // Complete entrance animation before jumping to next frame
    if (!entered) {
      goToFrame((prev) => Math.min(children.length - 1, prev + 1))
    }
  })
  const ctx = React.useMemo(
    (): SceneContextValue => ({
      sceneId,
      getCommand: (frame) => commandMap.get(frame),
      registerCommand: (frame, command) => {
        commandMap.set(frame, command)
        return () => {
          commandMap.delete(frame)
        }
      },
      focusedFrame,
      goToFrame,
      goToNextFrame,
    }),
    [focusedFrame, commandMap, goToFrame, goToNextFrame, sceneId],
  )
  return (
    <SceneContext.Provider value={ctx}>
      <div
        ref={containerRef}
        className="relative flex-1"
        tabIndex={-1}
        onClick={() => {
          const command = commandMap.get(focusedFrame)
          if (command?.skippable) {
            goToNextFrame()
          }
        }}>
        {BackgroundComponent && (
          <div className="absolute inset-0 flex flex-col">
            <BackgroundComponent
              containerSize={containerSize}
              enteredPercent={(focusedFrame + 1) / children.length}
            />
          </div>
        )}

        {children.map((child, idx) => (
          <Command key={child.key} frame={idx}>
            {child}
          </Command>
        ))}
      </div>
    </SceneContext.Provider>
  )
}

function useFocusedFrame(sceneId: SceneId) {
  const [_focusedFrameId, goToFrameId] = useSearchParam<string>(
    'f',
    `${sceneId}_${0}`,
  )

  const focusedFrameId = String(_focusedFrameId)
  let focusedFrame = Number(focusedFrameId.replace(`${sceneId}_`, ''))
  if (Number.isNaN(focusedFrame)) {
    focusedFrame = 0
  }

  const latestFocusedFrameIndexRef = useSyncedRef(focusedFrame)
  const goToFrame = React.useCallback(
    (action: React.SetStateAction<number>) => {
      const newValue =
        typeof action === 'function'
          ? action(latestFocusedFrameIndexRef.current)
          : action
      goToFrameId(`${sceneId}_${newValue}`)
    },
    [latestFocusedFrameIndexRef, sceneId, goToFrameId],
  )
  return [focusedFrame, goToFrame] as const
}
