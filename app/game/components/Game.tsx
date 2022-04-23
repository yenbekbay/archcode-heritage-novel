import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {useLatestRef, useSearchParam} from '~/lib'
import type {GameContextValue} from './GameContext'
import {GameContext} from './GameContext'
import {Scene} from './Scene'

export interface GameProps {
  initialSceneId: string
  children?: React.ReactElement[] | React.ReactElement
}

export interface GameInstance {
  goBack: () => void
}

export const Game = React.forwardRef(function Game(
  {initialSceneId, children: childrenProp}: GameProps,
  forwardedRef: React.ForwardedRef<GameInstance>,
) {
  const [activeSceneId, setActiveSceneId] = useActiveSceneId(initialSceneId)
  const children = React.useMemo(
    () =>
      (flattenChildren(childrenProp) as React.ReactElement[]).filter(
        (el) => el.type === Scene,
      ),
    [childrenProp],
  )
  const ctx = React.useMemo(
    (): GameContextValue => ({
      goToScene: setActiveSceneId,
    }),
    [setActiveSceneId],
  )
  React.useImperativeHandle(
    forwardedRef,
    (): GameInstance => ({
      goBack: () => window.history.back(),
    }),
    [],
  )
  return (
    <GameContext.Provider value={ctx}>
      <div className="flex h-full w-full overflow-hidden bg-base-100">
        {children.map((child) => activeSceneId === child.props.id && child)}
      </div>
    </GameContext.Provider>
  )
})

function useActiveSceneId(initialSceneId: string) {
  const [_activeFrameId, goToFrameId] = useSearchParam<string>(
    'f',
    `${initialSceneId}_${0}`,
  )
  const activeFrameId = String(_activeFrameId)
  const activeSceneId = activeFrameId.includes('_')
    ? activeFrameId.split('_').slice(0, -1).join('_')
    : activeFrameId

  const latestActiveSceneIdRef = useLatestRef(activeSceneId)
  const setActiveSceneId = React.useCallback(
    (action: React.SetStateAction<string>) => {
      const newValue =
        typeof action === 'function'
          ? action(latestActiveSceneIdRef.current)
          : action
      goToFrameId(`${newValue}_0`)
    },
    [latestActiveSceneIdRef, goToFrameId],
  )
  return [activeSceneId, setActiveSceneId] as const
}
