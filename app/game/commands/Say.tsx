import {Option, Options} from '../components/Options'
import {useCommandControls} from './useCommandControls'
import {motion} from 'framer-motion'
import {Flex} from '~/lib/components/Flex'
import {Text} from '~/lib/components/Text'

export interface SayProps {
  children: string
  options?: Option[]
  continue?: boolean
}

export function Say({children, options, continue: shouldContinue}: SayProps) {
  const controls = useCommandControls({
    entryAnimation: (idx) => ({
      opacity: 1,
      transition: {delay: 0.5 + 0.02 * idx},
    }),
    shouldContinue,
  })
  return (
    <Flex css={{flex: 1, padding: '$4'}} direction="column">
      <Flex css={{flex: 1}} direction="column">
        <Text
          css={{
            textAlign: 'center',
            textShadow: '0 1px $colors$slate8',
            fontFamily: '$calligraph',
          }}>
          {children.split('').map((char, idx) => (
            <motion.span
              key={`${char}_${idx}`}
              initial={{opacity: 0}}
              animate={controls}
              custom={idx}>
              {char}
            </motion.span>
          ))}
        </Text>
      </Flex>

      {options && <Options options={options} />}
    </Flex>
  )
}
