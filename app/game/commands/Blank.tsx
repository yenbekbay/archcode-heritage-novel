import React from 'react'
import {useLatestRef} from '~/lib'
import type {CommandT} from '../components'
import {
  useCommandContext,
  useRegisterCommand,
  useSceneContext,
} from '../components'

export interface BlankProps {
  duration?: number
}

export function Blank({duration}: BlankProps) {
  const {goToNextFrame} = useSceneContext()
  const {active, visible} = useCommandContext()
  useRegisterCommand(
    React.useMemo(
      (): CommandT => ({
        skippable: true,
        retainedFor: 0,
        complete: () => false,
      }),
      [],
    ),
  )

  const latestActiveRef = useLatestRef(active)
  React.useEffect(
    () => {
      if (visible && duration != null) {
        setTimeout(() => {
          if (latestActiveRef.current) {
            goToNextFrame()
          }
        }, duration)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visible],
  )

  return null
}
