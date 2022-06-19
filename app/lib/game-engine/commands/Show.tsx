import type {CommandProps} from '../components'
import {Command} from '../components'
import type {ImageViewProps} from './views'
import {ImageView} from './views'

export interface ShowSource extends Omit<ImageViewProps, 'controls'> {}

export interface ShowProps
  extends Pick<CommandProps, 'hide' | 'next' | 'zIndex'> {
  src: string | ShowSource | (string | ShowSource)[]
  durationMs?: number
}

export function Show({
  src: srcProp,
  durationMs = 4000,
  hide,
  next,
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
      next={next}
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
