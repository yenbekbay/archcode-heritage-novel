import React from 'react'

export interface PanelT {
  onSkip?: () => boolean
}

export interface SceneContextValue {
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
