import React from 'react'
import {CSS} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
  ForegroundView,
  Option,
  OptionsPlacement,
  OptionsView,
} from '../components'

export interface OptionsProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  options: Option[]
  dark?: boolean
  placement?: OptionsPlacement
  foregroundSrc?: string
  foregroundCss?: CSS
  variants?: CommandViewVariants
}

export function Options({
  options,
  dark,
  placement,
  foregroundSrc,
  foregroundCss,
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
              css={foregroundCss}
              variants={variants}
              controls={controls}
            />
          )}

          <OptionsView
            dark={dark}
            placement={placement}
            options={options}
            variants={variants}
            controls={controls}
          />
        </>
      )}
    </CommandContainer>
  )
}
