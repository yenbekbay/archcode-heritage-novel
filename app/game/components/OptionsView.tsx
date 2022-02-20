import {AnimationControls, motion} from 'framer-motion'
import {Button, Flex} from '~/lib'
import {CommandViewVariants} from './CommandContainer'
import {useCommandContext} from './CommandContext'
import {useGameContext} from './GameContext'
import {useSceneContext} from './SceneContext'

export interface Option {
  label: string
  action:
    | {type: 'go_to_scene'; sceneId: string}
    | {type: 'go_to_frame'; frame: number}
    | {type: 'go_to_next_frame'}
}

export type OptionsPlacement = 'top' | 'bottom'

export interface OptionsViewProps {
  options: Option[]
  dark?: boolean
  placement?: OptionsPlacement
  variants: CommandViewVariants
  controls: AnimationControls
}

export function OptionsView({
  options,
  dark,
  placement = 'bottom',
  variants,
  controls,
}: OptionsViewProps) {
  const {goToScene} = useGameContext()
  const {goToFrame} = useSceneContext()
  const {goToNextFrame} = useCommandContext()
  return (
    <Flex
      css={{
        position: 'absolute',
        inset: 0,
        padding: '$4',
        paddingTop: '$5',
      }}
      direction="column"
      justify={placement === 'bottom' ? 'end' : 'start'}
      align="center"
      gap="2">
      {options.map((o, idx) => (
        <Flex
          key={o.label}
          as={motion.div}
          direction="column"
          variants={variants}
          initial="initial"
          animate={controls}
          custom={idx}>
          <Button
            as={motion.div}
            variant={dark ? 'transparentBlack' : 'transparentWhite'}
            css={{
              height: 'auto',
              lineHeight: '$4',
              textAlign: 'center',
              fontFamily: '$calligraph',
              fontSize: '$4',
              color: dark ? 'white' : '$hiContrast',
              textShadow: dark
                ? '0 1px $colors$slate12'
                : '0 1px $colors$slate4',
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
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation()
              switch (o.action.type) {
                case 'go_to_scene':
                  goToScene(o.action.sceneId)
                  break
                case 'go_to_frame':
                  goToFrame(o.action.frame)
                  break
                case 'go_to_next_frame':
                  goToNextFrame()
                  break
              }
            }}>
            {o.label}
          </Button>
        </Flex>
      ))}
    </Flex>
  )
}
