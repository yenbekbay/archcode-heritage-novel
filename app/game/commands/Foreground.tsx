import {motion} from 'framer-motion'
import {CSS, Flex, Image} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
} from '../components'

export interface ForegroundProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  src: string
  css?: CSS
  variants?: CommandViewVariants
}

export function Foreground({
  src,
  css,
  variants = {
    initial: {opacity: 0},
    mount: {
      opacity: 1,
      transition: {delay: 0.5, duration: 2},
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.5, ease: 'easeOut'},
    },
  },
  ...restProps
}: ForegroundProps) {
  return (
    <CommandContainer autoContinueTimeout={500} {...restProps}>
      {(controls) => (
        <Flex
          as={motion.div}
          css={{flex: 1}}
          variants={variants}
          initial="initial"
          animate={controls}>
          <Image
            css={{
              position: 'absolute',
              bottom: 0,
              filter: 'drop-shadow(40px 40px 5px rgba(0, 0, 0, .35))',
              ...css,
            }}
            src={src}
          />
        </Flex>
      )}
    </CommandContainer>
  )
}
