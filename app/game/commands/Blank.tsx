import React from 'react'
import {PanelT, usePanelContext, useRegisterPanel} from '../components'

export interface BlankProps {
  autoContinueIn?: number
}

export function Blank({autoContinueIn}: BlankProps) {
  const {visible, goToNextFrame} = usePanelContext()
  useRegisterPanel(
    React.useMemo(
      (): PanelT => ({
        retainFor: 0,
        complete: () => false,
      }),
      [],
    ),
  )
  React.useEffect(
    () => {
      if (visible && autoContinueIn != null) {
        setTimeout(() => goToNextFrame(), autoContinueIn)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visible],
  )
  return null
}
