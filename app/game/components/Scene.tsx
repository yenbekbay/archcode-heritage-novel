import React from 'react'
import {useLatestRef, useSearchParam, useStableCallback} from '~/lib'
import {CommandT, SceneContext, SceneContextValue} from './SceneContext'

export interface SceneProps {
  id: string
  children?: React.ReactNode
}

export function Scene({id, children}: SceneProps) {
  const [commandMap] = React.useState(() => new Map<number, CommandT>())
  const [activeFrame, setActiveFrame] = useActiveFrame(id)
  const registerCommand = useStableCallback(
    (index: number, command: CommandT) => {
      commandMap.set(index, command)
      return () => commandMap.delete(index)
    },
  )
  const completeActiveCommand = useStableCallback(() => {
    const activeCommand = commandMap.get(activeFrame)
    return activeCommand?.complete() ?? false
  })
  const ctx = React.useMemo(
    (): SceneContextValue => ({
      commandMap,
      registerCommand,
      completeActiveCommand,
      activeFrame,
      goToFrame: setActiveFrame,
    }),
    [
      activeFrame,
      commandMap,
      registerCommand,
      setActiveFrame,
      completeActiveCommand,
    ],
  )
  return <SceneContext.Provider value={ctx}>{children}</SceneContext.Provider>
}

function useActiveFrame(sceneId: string) {
  const [_activeFrameId, setActiveFrameId] = useSearchParam<string>(
    'f',
    `${sceneId}_${0}`,
  )

  const activeFrameId = String(_activeFrameId)
  let activeFrame = Number(activeFrameId.replace(`${sceneId}_`, ''))
  if (Number.isNaN(activeFrame)) {
    activeFrame = 0
  }

  const latestActiveCommandIndexRef = useLatestRef(activeFrame)
  const setActiveFrame = React.useCallback(
    (action: React.SetStateAction<number>) => {
      const newValue =
        typeof action === 'function'
          ? action(latestActiveCommandIndexRef.current)
          : action
      setActiveFrameId(`${sceneId}_${newValue}`)
    },
    [latestActiveCommandIndexRef, sceneId, setActiveFrameId],
  )
  return [activeFrame, setActiveFrame] as const
}
