import React from 'react'
import {CommandContainer} from '../components'

export interface BlankProps {
  durationMs?: number
}

export function Blank({durationMs}: BlankProps) {
  return (
    <CommandContainer durationMs={durationMs} skippable transitory>
      {() => null}
    </CommandContainer>
  )
}
