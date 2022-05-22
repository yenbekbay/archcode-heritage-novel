import type {CommandProps, CommandViewAnimation} from '../components'
import {Command} from '../components'
import {ForegroundView} from './views'

export interface ForegroundProps
  extends Partial<Omit<CommandProps, 'children'>> {
  src: string
  style?: React.CSSProperties
  animation?: CommandViewAnimation
}

export function Foreground({
  src,
  style,
  animation = {
    initial: {opacity: 0},
    entrance: {
      opacity: 1,
      transition: {delay: 0.5, duration: 1},
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  ...restProps
}: ForegroundProps) {
  return (
    <Command durationMs={500} skippable {...restProps}>
      {(controls) => (
        <ForegroundView
          src={src}
          style={style}
          animation={animation}
          controls={controls}
        />
      )}
    </Command>
  )
}
