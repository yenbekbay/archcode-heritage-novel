import type {
  CommandProps,
  CommandViewAnimation,
  CommandViewColorScheme,
} from '../components'
import {Command} from '../components'
import type {Choice, ChoicesPlacement} from './views'
import {ChoicesView, ForegroundView} from './views'

export interface ChoicesProps<TStatementLabel extends string = string>
  extends Partial<Omit<CommandProps, 'children'>> {
  choices: Choice<TStatementLabel>[]
  label?: string
  size?: 'md' | 'lg'
  placement?: ChoicesPlacement
  scheme?: CommandViewColorScheme
  animation?: CommandViewAnimation
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  foregroundAnimation?: CommandViewAnimation
}

export function Choices({
  choices,
  label,
  size,
  placement,
  scheme,
  animation = {
    initial: {opacity: 0},
    entrance: (idx) => ({
      opacity: 1,
      transition: {delay: 0.5 + 0.02 * idx},
    }),
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  foregroundSrc,
  foregroundStyle,
  foregroundAnimation,
  ...restProps
}: ChoicesProps) {
  return (
    <Command {...restProps}>
      {(controls) => (
        <>
          {foregroundSrc && (
            <ForegroundView
              src={foregroundSrc}
              style={foregroundStyle}
              animation={foregroundAnimation}
              controls={controls}
            />
          )}

          <ChoicesView
            size={size}
            placement={placement}
            scheme={scheme}
            choices={choices}
            label={label}
            animation={animation}
            controls={controls}
          />
        </>
      )}
    </Command>
  )
}
