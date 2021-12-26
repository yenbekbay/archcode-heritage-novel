import {Panel as PanelT} from './SceneContext'
import React from 'react'

export interface PanelContextValue {
  registerPanel: (panel: PanelT) => () => void
  goToNextPanel: () => void
}

export const PanelContext = React.createContext<PanelContextValue | null>(null)

export function useRegisterPanel(panel: PanelT) {
  const ctx = React.useContext(PanelContext)
  if (!ctx) {
    throw new Error('`useOnSkip` can only be used inside a Panel component')
  }

  React.useEffect(() => {
    return ctx.registerPanel(panel)
  }, [panel, ctx])
}

export function useGoToNextPanel() {
  const ctx = React.useContext(PanelContext)
  if (!ctx) {
    throw new Error('`useGoToNext` can only be used inside a Panel component')
  }

  return ctx?.goToNextPanel
}
