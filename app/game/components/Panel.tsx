import React from 'react'
import {Flex} from '~/lib'
import {PanelContext, PanelContextValue} from './PanelContext'
import {SceneContext} from './SceneContext'

export interface PanelProps {
  index: number
  skipToNextPanel: () => void
  children: React.ReactNode
}

export function Panel({index, skipToNextPanel, children}: PanelProps) {
  const sceneCtx = React.useContext(SceneContext)
  const panelCtx = React.useMemo(
    (): PanelContextValue => ({
      registerPanel: (panel) =>
        sceneCtx?.registerPanel(index, panel) ?? (() => {}),
      skipToNextPanel,
    }),
    [index, sceneCtx, skipToNextPanel],
  )
  return (
    <PanelContext.Provider value={panelCtx}>
      <Flex css={{position: 'absolute', inset: 0}} direction="column">
        {children}
      </Flex>
    </PanelContext.Provider>
  )
}
