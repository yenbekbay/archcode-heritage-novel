import React from 'react'
import {useLatestRef, useSearchParam, useStableCallback} from '~/lib'
import {PanelT, SceneContext, SceneContextValue} from './SceneContext'

export interface SceneProps {
  id: string
  children?: React.ReactNode
}

export function Scene({id, children}: SceneProps) {
  const [panelMap] = React.useState(() => new Map<number, PanelT>())
  const [activeFrame, setActiveFrame] = useActiveFrame(id)
  const registerPanel = useStableCallback((index: number, panel: PanelT) => {
    panelMap.set(index, panel)
    return () => panelMap.delete(index)
  })
  const completeActivePanel = useStableCallback(() => {
    const activePanel = panelMap.get(activeFrame)
    return activePanel?.complete() ?? false
  })
  const ctx = React.useMemo(
    (): SceneContextValue => ({
      panelMap,
      registerPanel,
      completeActivePanel,
      activeFrame: activeFrame,
      setActiveFrame,
    }),
    [activeFrame, panelMap, registerPanel, setActiveFrame, completeActivePanel],
  )
  return <SceneContext.Provider value={ctx}>{children}</SceneContext.Provider>
}

function useActiveFrame(sceneId: string) {
  const [_activePanelId, setActivePanelId] = useSearchParam<string>(
    'p',
    `${sceneId}_${0}`,
  )

  const activePanelId = String(_activePanelId)
  let activeFrame = Number(activePanelId.replace(`${sceneId}_`, ''))
  if (Number.isNaN(activeFrame)) {
    activeFrame = 0
  }

  const latestActivePanelIndexRef = useLatestRef(activeFrame)
  const setActiveFrame = React.useCallback(
    (action: React.SetStateAction<number>) => {
      const newValue =
        typeof action === 'function'
          ? action(latestActivePanelIndexRef.current)
          : action
      setActivePanelId(`${sceneId}_${newValue}`)
    },
    [latestActivePanelIndexRef, sceneId, setActivePanelId],
  )
  return [activeFrame, setActiveFrame] as const
}
