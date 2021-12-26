import {GameContext, GameContextValue} from './GameContext'
import {Scene} from './Scene'
import React from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {useLatestRef} from '~/hooks/useLatestRef'
import {useSearchParam} from '~/hooks/useSearchParam'
import {Flex} from '~/styles/Flex'

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
  const [activePanelId, setActivePanelId] = useSearchParam<string>(
    'p',
    `${initialSceneId}_${0}`,
  )
  const activeSceneId = activePanelId.split('_').slice(0, -1).join('_')

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
