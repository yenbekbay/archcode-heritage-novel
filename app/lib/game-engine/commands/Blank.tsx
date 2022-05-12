import {CommandContainer} from '../components'

export interface BlankProps {
  durationMs?: number
  transitory?: boolean
}

export function Blank({durationMs, transitory}: BlankProps) {
  return (
    <CommandContainer durationMs={durationMs} transitory={transitory} skippable>
      {() => null}
    </CommandContainer>
  )
}
