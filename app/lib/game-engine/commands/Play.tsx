import type {CommandAudioOptions} from '../components'
import {Command} from '../components'
import type {Statement} from '../contexts'

export interface PlayProps {
  audio?: string | CommandAudioOptions
  hide?: number | ((statement: Statement) => boolean)
}

export function Play({audio, hide}: PlayProps) {
  return (
    <Command
      name="Play"
      behavior={['skippable_timed', {durationMs: 0}]}
      audio={audio}
      hide={hide}>
      {() => null}
    </Command>
  )
}
