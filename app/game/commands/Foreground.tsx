import {motion} from 'framer-motion'
import {Flex, Image} from '~/lib'
import {CommandContainer} from '../components'

export interface ForegroundProps {
  src: string
  auto?: boolean
  fixed?: boolean
}

export function Foreground({src, fixed, auto}: ForegroundProps) {
  return (
    <CommandContainer
      mountAnimation={{
        x: 0,
        scale: 1,
        transition: {delay: 0.5, duration: 2},
      }}
      exitAnimation={{
        opacity: 0,
        transition: {duration: 0.5, ease: 'easeOut'},
      }}
      autoContinueTimeout={500}
      autoContinue={auto}
      fixed={fixed}>
      {(controls) => (
        <MotionFlex
          css={{flex: 1}}
          initial={{x: '250%', scale: 0.5, originY: 1}}
          animate={controls}>
          <Image
            css={{height: '100%', transform: 'translate(-50%) scale(1.15)'}}
            src={src}
          />
        </MotionFlex>
      )}
    </CommandContainer>
  )
}

const MotionFlex = motion(Flex)
