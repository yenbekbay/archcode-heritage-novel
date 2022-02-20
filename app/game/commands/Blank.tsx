import React from 'react'
import {CommandT, useCommandContext, useRegisterCommand} from '../components'

export interface BlankProps {
  transitoryIn?: number
}

export function Blank({transitoryIn}: BlankProps) {
  const {visible, goToNextFrame} = useCommandContext()
  useRegisterCommand(
    React.useMemo(
      (): CommandT => ({
        retainedFor: 0,
        complete: () => false,
      }),
      [],
    ),
  )
  React.useEffect(
    () => {
      if (visible && transitoryIn != null) {
        setTimeout(() => goToNextFrame(), transitoryIn)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visible],
  )
  return null
}
