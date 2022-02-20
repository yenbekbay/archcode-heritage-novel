import {motion} from 'framer-motion'
import {Button, Flex} from '~/lib'
import {
  CommandContainer,
  CommandContainerProps,
  CommandViewVariants,
  useGameContext,
} from '../components'

export interface Option {
  label: string
  action: {type: 'go_to_scene'; sceneId: string}
}

export interface OptionsProps
  extends Partial<Omit<CommandContainerProps, 'children'>> {
  options: Option[]
  variants?: CommandViewVariants
}

export function Options({
  options,
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
}: OptionsProps) {
  const {goToScene} = useGameContext()
  return (
    <CommandContainer autoContinueTimeout={0} {...restProps}>
      {(controls) => (
        <Flex
          as={motion.div}
          css={{flex: 1, padding: '$4'}}
          direction="column"
          justify="end"
          align="center"
          gap="2">
          {options.map((o, idx) => (
            <Flex
              key={o.label}
              as={motion.div}
              variants={variants}
              initial="initial"
              animate={controls}
              custom={idx}>
              <Button
                as={motion.div}
                variant="transparentBlack"
                css={{
                  fontFamily: '$calligraph',
                  fontSize: '$4',
                  color: 'white',
                  textShadow: '0 1px $colors$slate12',
                  boxShadow: '0 2px rgba(0, 0, 0, .35)',
                }}
                animate={{y: -8}}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.05 * idx,
                  duration: 1,
                  ease: 'easeInOut',
                }}
                onClick={() => {
                  switch (o.action.type) {
                    case 'go_to_scene':
                      goToScene(o.action.sceneId)
                      break
                  }
                }}>
                {o.label}
              </Button>
            </Flex>
          ))}
        </Flex>
      )}
    </CommandContainer>
  )
}
