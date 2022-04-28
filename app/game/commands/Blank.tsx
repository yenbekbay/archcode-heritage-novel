import React from 'react'
import {useSyncedRef} from '@react-hookz/web'
import type {CommandT} from '../components'
import {
  useCommandContext,
  useRegisterCommand,
  useSceneContext,
} from '../components'

export interface BlankProps {
  durationMs?: number
}

export function Blank({durationMs}: BlankProps) {
  const {skip} = useSceneContext()
  const {focused, visible} = useCommandContext()
  useRegisterCommand(
    React.useMemo(
      (): CommandT => ({
        skippable: true,
        visibleExtra: 0,
        enter: () => false,
      }),
      [],
    ),
  )

  const latestFocusedRef = useSyncedRef(focused)
  React.useEffect(
    () => {
      if (visible && durationMs != null) {
        setTimeout(() => {
          if (latestFocusedRef.current) {
            skip()
          }
        }, durationMs)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visible],
  )

  return null
}
