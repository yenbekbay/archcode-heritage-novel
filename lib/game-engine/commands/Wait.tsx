import {Command} from '../components'

export interface WaitProps {
  durationMs?: number
}

export function Wait({durationMs = 4000}: WaitProps) {
  return (
    <Command name="Wait" behavior={['skippable_timed', {durationMs}]}>
      {() => null}
    </Command>
  )
}
