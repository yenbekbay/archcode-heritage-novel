import {motion} from 'framer-motion'
import {Flex, Text} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
} from '../components'

export interface TitleProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  children: string
  variants?: CommandViewVariants
}

export function Title({
  children,
  variants = {
    initial: {opacity: 0},
    mount: {
      opacity: 1,
      transition: {delay: 0.5, duration: 4},
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  ...restProps
}: TitleProps) {
  return (
    <CommandContainer skippable {...restProps}>
      {(controls) => (
        <Flex
          css={{flex: 1, padding: '$4'}}
          direction="column"
          justify="center">
          <Text
            as={motion.span}
            css={{
              color: '$red10',
              textAlign: 'center',
              textShadow: '0 1px $colors$slate12',
              fontFamily: '$calligraph',
              fontWeight: 700,
              lineHeight: 1,
            }}
            size="7"
            variants={variants}
            initial="initial"
            animate={controls}>
            {children}
          </Text>
        </Flex>
      )}
    </CommandContainer>
  )
}
