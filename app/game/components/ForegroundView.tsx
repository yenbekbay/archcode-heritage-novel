import {AnimationControls, motion} from 'framer-motion'
import {CSS, Flex, Image} from '~/lib'
import {CommandViewVariants} from './CommandContainer'

export interface ForegroundViewProps {
  src?: string
  css?: CSS
  variants: CommandViewVariants
  controls: AnimationControls
}

export function ForegroundView({
  src,
  css,
  variants,
  controls,
}: ForegroundViewProps) {
  return (
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
          ...css,
        }}
        src={src}
      />
    </Flex>
  )
}
