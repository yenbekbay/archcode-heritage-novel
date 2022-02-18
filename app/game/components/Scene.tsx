import React from 'react'
import {useLatestRef, useSearchParam, useStableCallback} from '~/lib'
import {PanelT, SceneContext, SceneContextValue} from './SceneContext'

export interface SceneProps {
  id: string
  children?: React.ReactNode
}

export function Scene({id, children}: SceneProps) {
  const [panelMap] = React.useState(() => new Map<number, PanelT>())
  const [activePanelIndex, setActivePanelIndex] = useActivePanelIndex(id)
  const registerPanel = useStableCallback((index: number, panel: PanelT) => {
    panelMap.set(index, panel)
    return () => panelMap.delete(index)
  })
  const skipActivePanel = useStableCallback(() => {
    const activePanel = panelMap.get(activePanelIndex)
    return activePanel?.skip() ?? false
  })
  const ctx = React.useMemo(
    (): SceneContextValue => ({
      panelMap,
      registerPanel,
      skipActivePanel,
      activePanelIndex,
      setActivePanelIndex,
    }),
    [
      activePanelIndex,
      panelMap,
      registerPanel,
      setActivePanelIndex,
      skipActivePanel,
    ],
  )
  return <SceneContext.Provider value={ctx}>{children}</SceneContext.Provider>
}

function useActivePanelIndex(sceneId: string) {
  const [activePanelId, setActivePanelId] = useSearchParam<string>(
    'p',
    `${sceneId}_${0}`,
  )

  let activePanelIndex = Number(activePanelId.replace(`${sceneId}_`, ''))
  if (Number.isNaN(activePanelIndex)) {
    activePanelIndex = 0
  }

  const latestActivePanelIndexRef = useLatestRef(activePanelIndex)
  const setActivePanelIndex = React.useCallback(
    (action: React.SetStateAction<number>) => {
      const newValue =
        typeof action === 'function'
          ? action(latestActivePanelIndexRef.current)
          : action
      setActivePanelId(`${sceneId}_${newValue}`)
    },
    [latestActivePanelIndexRef, sceneId, setActivePanelId],
  )
  return [activePanelIndex, setActivePanelIndex] as const
}
