import {PanelContext, PanelContextValue} from './PanelContext'
import {SceneContext} from './SceneContext'
import {usePresence} from 'framer-motion'
import React from 'react'
import {useLatestRef} from '~/hooks/useLatestRef'
import {Flex} from '~/styles/Flex'

export interface PanelProps {
  index: number
  children: React.ReactNode
}

export function Panel({index, children}: PanelProps) {
  const [isPresent] = usePresence()
  const latestIsPresentRef = useLatestRef(isPresent)
  const sceneCtx = React.useContext(SceneContext)
  const panelCtx = React.useMemo(
    (): PanelContextValue => ({
      registerPanel: (panel) =>
        sceneCtx?.registerPanel(index, panel) ?? (() => {}),
      goToNext: () => {
        if (latestIsPresentRef.current) {
          sceneCtx?.goToNext()
        }
      },
    }),
    [index, latestIsPresentRef, sceneCtx],
  )
  return (
    <PanelContext.Provider value={panelCtx}>
      <Flex css={{position: 'absolute', inset: 0}} direction="column">
        {children}
      </Flex>
    </PanelContext.Provider>
  )
}
