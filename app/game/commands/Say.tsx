import clsx from 'clsx'
import {motion} from 'framer-motion'
import React from 'react'
import type {
  CommandContainerProps,
  CommandViewVariants,
  Option,
} from '../components'
import {CommandContainer, ForegroundView, OptionsView} from '../components'

export interface SayProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  children: string
  href?: string
  large?: boolean
  bottom?: boolean
  dark?: boolean
  style?: React.CSSProperties
  textStyle?: React.CSSProperties
  optionsTop?: Option[]
  optionsBottom?: Option[]
  optionsDark?: boolean
  foregroundSrc?: string
  foregroundStyle?: React.CSSProperties
  variants?: CommandViewVariants
}

export function Say({
  children,
  href,
  large,
  bottom,
  dark,
  style,
  textStyle,
  optionsTop,
  optionsBottom,
  optionsDark,
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
}: SayProps) {
  const chars = children.split('')
  const TextComp = href ? 'a' : 'span'
  return (
    <CommandContainer
      duration={3000 + chars.length * 20}
      skippable
      {...restProps}>
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

          <div
            className={clsx(
              'absolute inset-0 flex flex-col items-center p-8 pt-20',
              bottom ? 'justify-end' : 'justify-start',
            )}
            style={style}>
            <TextComp
              className={clsx(
                'whitespace-pre-wrap text-center font-calligraph',
                large ? 'text-xl' : 'text-md',
              )}
              style={{
                color: dark ? '#fBf9e0' : 'hsl(206, 24.0%, 9.0%)',
                textShadow: dark
                  ? '0 -1px rgba(0, 0, 0, 0.35), 0 2px hsl(206, 24.0%, 9.0%)'
                  : '0 1px hsl(209, 12.2%, 93.2%)',
                ...(href && {
                  textDecoration: 'underline',
                  textUnderlineOffset: large ? '6px' : '4px',
                }),
                ...textStyle,
              }}
              {...(href && {
                href,
                target: '_blank',
                rel: 'noopener noreferrer',
              })}>
              {chars.map((char, idx) => (
                <motion.span
                  key={`${char}_${idx}`}
                  variants={variants}
                  initial="initial"
                  animate={controls}
                  custom={idx}>
                  {char}
                </motion.span>
              ))}
            </TextComp>
          </div>

          {optionsTop && (
            <OptionsView
              dark={optionsDark}
              placement="top"
              options={optionsTop}
              variants={variants}
              controls={controls}
            />
          )}

          {optionsBottom && (
            <OptionsView
              dark={optionsDark}
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
