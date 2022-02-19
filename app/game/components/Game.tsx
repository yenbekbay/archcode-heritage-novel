import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {Flex, useLatestRef, useSearchParam} from '~/lib'
import {GameContext, GameContextValue} from './GameContext'
import {Scene} from './Scene'

export interface GameProps {
  initialSceneId: string
  children?: React.ReactElement[] | React.ReactElement
}

export function Game({initialSceneId, children: childrenProp}: GameProps) {
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
}

function useActiveSceneId(initialSceneId: string) {
  const [_activePanelId, setActivePanelId] = useSearchParam<string>(
    'p',
    `${initialSceneId}_${0}`,
  )
  const activePanelId = String(_activePanelId)
  const activeSceneId = activePanelId.includes('_')
    ? activePanelId.split('_').slice(0, -1).join('_')
    : activePanelId

  const latestActiveSceneIdRef = useLatestRef(activeSceneId)
  const setActiveSceneId = React.useCallback(
    (action: React.SetStateAction<string>) => {
      const newValue =
        typeof action === 'function'
          ? action(latestActiveSceneIdRef.current)
          : action
      setActivePanelId(`${newValue}_0`)
    },
    [latestActiveSceneIdRef, setActivePanelId],
  )
  return [activeSceneId, setActiveSceneId] as const
}
