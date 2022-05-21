import {Command} from '../components'

export interface BlankProps {
  durationMs?: number
  transitory?: boolean
}

export function Blank({durationMs, transitory}: BlankProps) {
  return (
    <Command durationMs={durationMs} transitory={transitory} skippable>
      {() => null}
    </Command>
  )
}
