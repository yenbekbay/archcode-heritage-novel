import React from 'react'

export interface PanelT {
  fixed: boolean
  skip: () => void
}

export interface SceneContextValue {
  panelMap: Map<number, PanelT>
  registerPanel: (index: number, panel: PanelT) => () => void
  skipActivePanel: () => boolean
  activePanelIndex: number
  setActivePanelIndex: React.Dispatch<React.SetStateAction<number>>
}

export const SceneContext = React.createContext<SceneContextValue | null>(null)

export function useSceneContext() {
  const ctx = React.useContext(SceneContext)
  if (!ctx) {
    throw new Error(
      '`useSceneContext` can only be used inside a Scene component',
    )
  }
  return ctx
}
