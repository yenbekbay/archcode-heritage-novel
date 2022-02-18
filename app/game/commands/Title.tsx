import {motion} from 'framer-motion'
import {Flex, Text} from '~/lib'
import {CommandContainer, Option, Options} from '../components'

export interface TitleProps {
  children: string
  options?: Option[]
}

export function Title({children, options}: TitleProps) {
  return (
    <CommandContainer
      mountAnimation={{
        opacity: 1,
        transition: {duration: 4},
      }}
      exitAnimation={{
        opacity: 0,
        transition: {duration: 0.5, ease: 'easeOut'},
      }}>
      {(controls) => (
        <Flex
          css={{flex: 1, padding: '$4'}}
          direction="column"
          justify="center">
          <Flex css={{flex: 1}} direction="column" justify="center">
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
              initial={{opacity: 0}}
              animate={controls}>
              {children}
            </Text>
          </Flex>

          {options && <Options options={options} />}
        </Flex>
      )}
    </CommandContainer>
  )
}
