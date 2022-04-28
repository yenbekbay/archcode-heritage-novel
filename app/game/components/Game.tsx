import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {useSyncedRef} from '@react-hookz/web'
import {useSearchParam} from '~/lib'
import type {GameContextValue} from './GameContext'
import {GameContext} from './GameContext'
import {Scene} from './Scene'

export interface GameProps {
  initialSceneId: SceneId
  children?: React.ReactElement[] | React.ReactElement
}

export interface GameInstance {
  goBack: () => void
}

export const Game = React.forwardRef(function Game(
  {initialSceneId, children: childrenProp}: GameProps,
  forwardedRef: React.ForwardedRef<GameInstance>,
) {
  const [focusedSceneId, setFocusedSceneId] = useFocusedSceneId(initialSceneId)
  const children = React.useMemo(
    () =>
      (flattenChildren(childrenProp) as React.ReactElement[]).filter(
        (el) => el.type === Scene,
      ),
    [childrenProp],
  )
  const ctx = React.useMemo(
    (): GameContextValue => ({
      goToScene: setFocusedSceneId,
    }),
    [setFocusedSceneId],
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
        {children.map((child) => focusedSceneId === child.props.id && child)}
      </div>
    </GameContext.Provider>
  )
})

function useFocusedSceneId(initialSceneId: SceneId) {
  const [_focusedFrameId, goToFrameId] = useSearchParam<string>(
    'f',
    `${initialSceneId}_${0}`,
  )
  const focusedFrameId = String(_focusedFrameId)
  const focusedSceneId = focusedFrameId.includes('_')
    ? focusedFrameId.split('_').slice(0, -1).join('_')
    : focusedFrameId

  const latestFocusedSceneIdRef = useSyncedRef(focusedSceneId)
  const setFocusedSceneId = React.useCallback(
    (action: React.SetStateAction<string>) => {
      const newValue =
        typeof action === 'function'
          ? action(latestFocusedSceneIdRef.current)
          : action
      goToFrameId(`${newValue}_0`)
    },
    [latestFocusedSceneIdRef, goToFrameId],
  )
  return [focusedSceneId, setFocusedSceneId] as const
}
