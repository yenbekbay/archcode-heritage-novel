import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {Flex, useLatestRef, useSearchParam} from '~/lib'
import {GameContext, GameContextValue} from './GameContext'
import {Scene} from './Scene'

export interface GameProps {
  initialSceneId: string
  children?: React.ReactElement[] | React.ReactElement
}

export interface GameInstance {
  goBack: () => void
}

export const Game = React.forwardRef(
  (
    {initialSceneId, children: childrenProp}: GameProps,
    forwardedRef: React.ForwardedRef<GameInstance>,
  ) => {
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
        <Flex
          css={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: '$background',
          }}>
          {children.map((child) => activeSceneId === child.props.id && child)}
        </Flex>
      </GameContext.Provider>
    )
  },
)

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
