import {motion} from 'framer-motion'
import {Flex, Text} from '~/lib'
import {CommandContainer, Option, Options} from '../components'

export interface SayProps {
  children: string
  options?: Option[]
  large?: boolean
  auto?: boolean
  fixed?: boolean
}

export function Say({children, options, large, fixed, auto}: SayProps) {
  return (
    <CommandContainer
      mountAnimation={(idx) => ({
        opacity: 1,
        transition: {delay: 0.5 + 0.02 * idx},
      })}
      exitAnimation={{
        opacity: 0,
        transition: {duration: 0.5, ease: 'easeOut'},
      }}
      autoContinue={auto}
      fixed={fixed}>
      {(controls) => (
        <Flex css={{flex: 1, padding: '$4'}} direction="column">
          <Flex css={{flex: 1}} direction="column">
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
      )}
    </CommandContainer>
  )
}
