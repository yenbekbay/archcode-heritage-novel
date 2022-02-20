import {motion} from 'framer-motion'
import {CSS, Flex, Image, Text} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
} from '../components'

export interface SayProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  children: string
  large?: boolean
  foregroundSrc?: string
  foregroundCss?: CSS
  variants?: CommandViewVariants
}

export function Say({
  children,
  large,
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
      autoContinueTimeout={3000 + chars.length * 20}
      {...restProps}>
      {(controls) => (
        <>
          {foregroundSrc && (
            <Flex
              as={motion.div}
              css={{position: 'absolute', inset: 0}}
              variants={variants}
              initial="initial"
              animate={controls}
              custom={0}>
              <Image
                css={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  ...foregroundCss,
                }}
                src={foregroundSrc}
              />
            </Flex>
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
                textShadow: '0 1px $colors$slate8',
                fontFamily: '$calligraph',
                ...(large && {
                  fontSize: '$5',
                }),
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
        </>
      )}
    </CommandContainer>
  )
}
