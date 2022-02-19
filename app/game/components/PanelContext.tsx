import React from 'react'
import {PanelT} from './SceneContext'

export interface PanelContextValue {
  index: number
  visible: boolean
  registerPanel: (panel: PanelT) => () => void
  goToNextFrame: () => void
}

export const PanelContext = React.createContext<PanelContextValue | null>(null)

export function usePanelContext() {
  const ctx = React.useContext(PanelContext)
  if (!ctx) {
    throw new Error(
      '`usePanelContext` can only be used inside a Panel component',
    )
  }
  return ctx
}

export function useRegisterPanel(panel: PanelT) {
  const ctx = usePanelContext()
  React.useEffect(() => {
    return ctx.registerPanel(panel)
  }, [panel, ctx])
}
