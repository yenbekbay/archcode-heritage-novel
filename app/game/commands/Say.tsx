import {motion} from 'framer-motion'
import {Flex, Text} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
} from '../components'

export interface SayProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  children: string
  large?: boolean
  variants?: CommandViewVariants
}

export function Say({
  children,
  large,
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
  return (
    <CommandContainer autoContinueTimeout={4000} {...restProps}>
      {(controls) => (
        <Flex css={{flex: 1, padding: '$4'}} direction="column">
          <Text
            css={{
              textAlign: 'center',
              textShadow: '0 1px $colors$slate8',
              fontFamily: '$calligraph',
              ...(large && {
                fontSize: '$5',
                mt: '$4',
              }),
            }}>
            {children.split('').map((char, idx) => (
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
      )}
    </CommandContainer>
  )
}
