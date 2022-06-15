import type {CommandProps, CommandViewAnimation} from '../components'
import {Command} from '../components'
import {ImageView} from './views'

export interface SceneSource {
  uri: string
  style?: React.CSSProperties
  animation?: CommandViewAnimation
}

export interface SceneProps
  extends Pick<CommandProps, 'visibility' | 'zIndex'> {
  src: string | SceneSource | (string | SceneSource)[]
  durationMs?: number
}

export function Scene({
  src: srcProp,
  durationMs = 1000,
  visibility = 'indefinite',
  zIndex,
}: SceneProps) {
  const normalizedSrcs = (Array.isArray(srcProp) ? srcProp : [srcProp]).map(
    (src): SceneSource => (typeof src === 'object' ? src : {uri: src}),
  )
  return (
    <Command
      behavior={['skippable_timed', {durationMs}]}
      visibility={visibility}
      zIndex={zIndex}>
      {(controls) => (
        <>
          {normalizedSrcs.map((src, idx) => (
            <ImageView
              key={`${src.uri}_${idx}`}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
              controls={controls}
              {...src}
            />
          ))}
        </>
      )}
    </Command>
  )
}
