import React from 'react'
import {PanelContext, PanelContextValue} from './PanelContext'
import {SceneContext} from './SceneContext'

export interface PanelProps {
  index: number
  visible: boolean
  skipToNextPanel: () => void
  children: React.ReactNode
}

export function Panel({index, visible, skipToNextPanel, children}: PanelProps) {
  const sceneCtx = React.useContext(SceneContext)
  const panelCtx = React.useMemo(
    (): PanelContextValue => ({
      index,
      visible,
      registerPanel: (panel) =>
        sceneCtx?.registerPanel(index, panel) ?? (() => {}),
      skipToNextPanel,
    }),
    [index, sceneCtx, skipToNextPanel, visible],
  )
  return (
    <PanelContext.Provider value={panelCtx}>{children}</PanelContext.Provider>
  )
}
