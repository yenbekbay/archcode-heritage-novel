import type {CommandProps, CommandViewAnimation} from '../components'
import {Command} from '../components'
import {ImageView} from './views'

export interface ShowSource {
  uri: string
  style?: React.CSSProperties
  animation?: CommandViewAnimation
}

export interface ShowProps extends Pick<CommandProps, 'hide' | 'zIndex'> {
  src: string | ShowSource | (string | ShowSource)[]
  durationMs?: number
}

export function Show({
  src: srcProp,
  durationMs = 1000,
  hide,
  zIndex,
}: ShowProps) {
  const normalizedSrcs = (Array.isArray(srcProp) ? srcProp : [srcProp]).map(
    (src): ShowSource => (typeof src === 'object' ? src : {uri: src}),
  )
  return (
    <Command
      name="Show"
      behavior={['skippable_timed', {durationMs}]}
      hide={hide}
      zIndex={zIndex}>
      {(controls) => (
        <>
          {normalizedSrcs.map((src, idx) => (
            <ImageView key={`${src.uri}_${idx}`} controls={controls} {...src} />
          ))}
        </>
      )}
    </Command>
  )
}
