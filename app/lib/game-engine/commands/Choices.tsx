import type {
  CommandContainerProps,
  CommandViewVariants,
  Choice,
  ChoicesPlacement,
} from '../components'
import {CommandContainer, ForegroundView, ChoicesView} from '../components'

export interface ChoicesProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  choices: Choice[]
  label?: string
  large?: boolean
  dark?: boolean
  placement?: ChoicesPlacement
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  variants?: CommandViewVariants
}

export function Choices({
  choices,
  label,
  large,
  dark,
  placement,
  foregroundSrc,
  foregroundStyle,
  variants = {
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
  ...restProps
}: ChoicesProps) {
  return (
    <CommandContainer {...restProps}>
      {(controls) => (
        <>
          {foregroundSrc && (
            <ForegroundView
              src={foregroundSrc}
              style={foregroundStyle}
              variants={variants}
              controls={controls}
            />
          )}

          <ChoicesView
            large={large}
            dark={dark}
            placement={placement}
            choices={choices}
            label={label}
            variants={variants}
            controls={controls}
          />
        </>
      )}
    </CommandContainer>
  )
}
