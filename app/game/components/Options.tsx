import {motion} from 'framer-motion'
import {Button} from '~/styles/Button'
import {Flex} from '~/styles/Flex'

export interface Option {
  label: string
  action:
    | {type: 'go_to_scene'; sceneId: string}
    | {type: 'show_options'; options: Option[]}
}

export interface OptionsProps {
  options: Option[]
}

export function Options({options}: OptionsProps) {
  return (
    <Flex
      as={motion.div}
      direction="column"
      align="center"
      gap="2"
      initial={{opacity: 0}}
      exit={{opacity: 0, transition: {duration: EXIT_DURATION / 1000}}}
      animate={{opacity: 1, transition: {duration: ENTRY_DURATION / 1000}}}>
      {options.map((o) => (
        <Button
          key={o.label}
          as={motion.div}
          variant="transparentWhite"
          css={{
            fontFamily: '$calligraph',
            fontSize: '$4',
            textShadow: '0 1px $colors$slate12',
            backgroundColor: 'transparent',
          }}
          animate={{y: -8}}
          transition={{repeat: Infinity, repeatType: 'reverse', duration: 1}}
          onClick={() => {
            alert('Не сделано')
          }}>
          {o.label}
        </Button>
      ))}
    </Flex>
  )
}

const ENTRY_DURATION = 4000
const EXIT_DURATION = 500
