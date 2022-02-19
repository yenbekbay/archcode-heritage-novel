import React from 'react'
import {PanelContext, PanelContextValue} from './PanelContext'
import {SceneContext} from './SceneContext'

export interface PanelProps {
  index: number
  visible: boolean
  goToNextFrame: () => void
  children: React.ReactNode
}

export function Panel({index, visible, goToNextFrame, children}: PanelProps) {
  const sceneCtx = React.useContext(SceneContext)
  const panelCtx = React.useMemo(
    (): PanelContextValue => ({
      index,
      visible,
      registerPanel: (panel) =>
        sceneCtx?.registerPanel(index, panel) ?? (() => {}),
      goToNextFrame,
    }),
    [index, sceneCtx, goToNextFrame, visible],
  )
  return (
    <PanelContext.Provider value={panelCtx}>{children}</PanelContext.Provider>
  )
}
