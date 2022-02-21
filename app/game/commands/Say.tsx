import {motion} from 'framer-motion'
import {CSS, Flex, Text} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
  ForegroundView,
  Option,
  OptionsView,
} from '../components'

export interface SayProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  children: string
  href?: string
  large?: boolean
  bottom?: boolean
  dark?: boolean
  css?: CSS
  textCss?: CSS
  optionsTop?: Option[]
  optionsBottom?: Option[]
  optionsDark?: boolean
  foregroundSrc?: string
  foregroundCss?: CSS
  variants?: CommandViewVariants
}

export function Say({
  children,
  href,
  large,
  bottom,
  dark,
  css,
  textCss,
  optionsTop,
  optionsBottom,
  optionsDark,
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
}: SayProps) {
  const chars = children.split('')
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
              css={foregroundCss}
              variants={variants}
              controls={controls}
            />
          )}

          <Flex
            css={{
              position: 'absolute',
              inset: 0,
              padding: '$4',
              paddingTop: '$5',
              ...css,
            }}
            direction="column"
            justify={bottom ? 'end' : 'start'}
            align="center">
            <Text
              as={href ? 'a' : 'span'}
              css={{
                textAlign: 'center',
                fontFamily: '$calligraph',
                fontSize: large ? '$5' : '$4',
                whiteSpace: 'pre-wrap',
                color: dark ? '#fBf9e0' : '$hiContrast',
                textShadow: dark
                  ? '0 2px $colors$slate12'
                  : '0 2px $colors$slate4',
                ...(href && {
                  textUnderlineOffset: large ? '6px' : '4px',
                }),
                ...textCss,
              }}
              {...(href && {
                href,
                target: '_blank',
                rel: 'noopener',
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
            </Text>
          </Flex>

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
