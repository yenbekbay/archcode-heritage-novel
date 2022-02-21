import useSize from '@react-hook/size'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {Flex, useLatestRef, useSearchParam, useStableCallback} from '~/lib'
import {SceneContextValue} from '.'
import {Command} from './Command'
import {useSceneId} from './Scene'
import {CommandT, SceneContext} from './SceneContext'

export interface SceneBackgroundComponentProps {
  containerSize: [number, number]
  /** 0 to 1 */
  completedPercent: number
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
  const [activeFrame, goToFrame] = useActiveFrame(sceneId)
  const goToNextFrame = useStableCallback(() => {
    const activeCommand = commandMap.get(activeFrame)
    const completed = activeCommand?.complete() ?? false
    if (!completed) {
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
      activeFrame,
      goToFrame,
      goToNextFrame,
    }),
    [activeFrame, commandMap, goToFrame, goToNextFrame, sceneId],
  )
  return (
    <SceneContext.Provider value={ctx}>
      <Flex
        ref={containerRef}
        css={{flex: 1, position: 'relative'}}
        tabIndex={-1}
        onClick={() => {
          const command = commandMap.get(activeFrame)
          if (command?.skippable) {
            goToNextFrame()
          }
        }}>
        {BackgroundComponent && (
          <Flex direction="column" css={{position: 'absolute', inset: 0}}>
            <BackgroundComponent
              containerSize={containerSize}
              completedPercent={(activeFrame + 1) / children.length}
            />
          </Flex>
        )}

        {children.map((child, idx) => (
          <Command key={child.key} frame={idx}>
            {child}
          </Command>
        ))}
      </Flex>
    </SceneContext.Provider>
  )
}

function useActiveFrame(sceneId: string) {
  const [_activeFrameId, goToFrameId] = useSearchParam<string>(
    'f',
    `${sceneId}_${0}`,
  )

  const activeFrameId = String(_activeFrameId)
  let activeFrame = Number(activeFrameId.replace(`${sceneId}_`, ''))
  if (Number.isNaN(activeFrame)) {
    activeFrame = 0
  }

  const latestActiveFrameIndexRef = useLatestRef(activeFrame)
  const goToFrame = React.useCallback(
    (action: React.SetStateAction<number>) => {
      const newValue =
        typeof action === 'function'
          ? action(latestActiveFrameIndexRef.current)
          : action
      goToFrameId(`${sceneId}_${newValue}`)
    },
    [latestActiveFrameIndexRef, sceneId, goToFrameId],
  )
  return [activeFrame, goToFrame] as const
}
