import React from 'react'
import type {
  CommandContainerProps,
  CommandViewVariants,
  Option,
} from '../components'
import {CommandContainer, ForegroundView, OptionsView} from '../components'

export interface OptionsProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  optionsTop?: Option[]
  optionsBottom?: Option[]
  dark?: boolean
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  variants?: CommandViewVariants
}

export function Options({
  optionsTop,
  optionsBottom,
  dark,
  foregroundSrc,
  foregroundStyle,
  variants = {
    initial: {opacity: 0},
    mount: (idx) => ({
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

          {optionsTop && (
            <OptionsView
              dark={dark}
              placement="top"
              options={optionsTop}
              variants={variants}
              controls={controls}
            />
          )}

          {optionsBottom && (
            <OptionsView
              dark={dark}
              placement="bottom"
              options={optionsBottom}
              variants={variants}
              controls={controls}
            />
          )}
        </>
      )}
    </CommandContainer>
  )
}
