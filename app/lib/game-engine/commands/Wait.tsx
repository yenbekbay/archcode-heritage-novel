import {Command} from '../components'

export interface WaitProps {
  durationMs?: number
}

export function Wait({durationMs = 1000}: WaitProps) {
  return (
    <Command behavior={['skippable_timed', {durationMs}]}>{() => null}</Command>
  )
}
