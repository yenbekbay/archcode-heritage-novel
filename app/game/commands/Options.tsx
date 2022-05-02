import type {
  CommandContainerProps,
  CommandViewVariants,
  Option,
  OptionsPlacement,
} from '../components'
import {CommandContainer, ForegroundView, OptionsView} from '../components'

export interface OptionsProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  options: Option[]
  label?: string
  large?: boolean
  dark?: boolean
  placement?: OptionsPlacement
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  variants?: CommandViewVariants
}

export function Options({
  options,
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
}: OptionsProps) {
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

          <OptionsView
            large={large}
            dark={dark}
            placement={placement}
            options={options}
            label={label}
            variants={variants}
            controls={controls}
          />
        </>
      )}
    </CommandContainer>
  )
}
