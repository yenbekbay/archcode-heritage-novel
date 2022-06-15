import type {CommandProps, CommandViewAnimation} from '../components'
import {Command} from '../components'
import {ImageView} from './views'

export interface ShowSource {
  uri: string
  style?: React.CSSProperties
  animation?: CommandViewAnimation
}

export interface ShowProps extends Pick<CommandProps, 'visibility' | 'zIndex'> {
  src: string | ShowSource | (string | ShowSource)[]
  durationMs?: number
}

export function Show({
  src: srcProp,
  durationMs = 1000,
  visibility,
  zIndex,
}: ShowProps) {
  const normalizedSrcs = (Array.isArray(srcProp) ? srcProp : [srcProp]).map(
    (src): ShowSource => (typeof src === 'object' ? src : {uri: src}),
  )
  return (
    <Command
      behavior={['skippable_timed', {durationMs}]}
      visibility={visibility}
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
