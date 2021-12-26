import React from 'react'

export interface Panel {
  onSkip?: () => boolean
}

export interface SceneContextValue {
  goToNextPanel: () => void
  registerPanel: (index: number, panel: Panel) => () => void
}

export const SceneContext = React.createContext<SceneContextValue | null>(null)
