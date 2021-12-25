import {PanelContext, PanelContextValue} from './PanelContext'
import {SceneContext} from './SceneContext'
import React from 'react'
import {Flex} from '~/styles/Flex'

export interface PanelProps {
  index: number
  children: React.ReactNode
}

export function Panel({index, children}: PanelProps) {
  const sceneCtx = React.useContext(SceneContext)
  const panelCtx = React.useMemo(
    (): PanelContextValue => ({
      registerPanel: (panel) =>
        sceneCtx?.registerPanel(index, panel) ?? (() => {}),
    }),
    [index, sceneCtx],
  )
  return (
    <PanelContext.Provider value={panelCtx}>
      <Flex css={{position: 'absolute', inset: 0}} direction="column">
        {children}
      </Flex>
    </PanelContext.Provider>
  )
}
