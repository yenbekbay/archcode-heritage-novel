import {motion} from 'framer-motion'
import {CSS, Flex, Text} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
  ForegroundView,
  Option,
  OptionsPlacement,
  OptionsView,
} from '../components'

export interface SayProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  children: string
  large?: boolean
  dark?: boolean
  options?: Option[]
  optionsDark?: boolean
  optionsPlacement?: OptionsPlacement
  foregroundSrc?: string
  foregroundCss?: CSS
  variants?: CommandViewVariants
}

export function Say({
  children,
  large,
  dark,
  options,
  optionsDark,
  optionsPlacement,
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
            }}
            direction="column">
            <Text
              css={{
                textAlign: 'center',
                fontFamily: '$calligraph',
                fontSize: large ? '$5' : '$4',
                color: dark ? 'white' : '$hiContrast',
                textShadow: dark
                  ? '0 1px $colors$slate12'
                  : '0 1px $colors$slate4',
              }}>
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

          {options && (
            <OptionsView
              dark={optionsDark}
              placement={optionsPlacement}
              options={options}
              variants={variants}
              controls={controls}
            />
          )}
        </>
      )}
    </CommandContainer>
  )
}
