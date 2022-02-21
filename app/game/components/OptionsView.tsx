import {AnimationControls, motion} from 'framer-motion'
import React from 'react'
import {Button, Flex} from '~/lib'
import {CommandViewVariants} from './CommandContainer'
import {useCommandContext} from './CommandContext'
import {useGameContext} from './GameContext'
import {useSceneContext} from './SceneContext'

interface OptionContext {
  sceneId: string
  frame: number
  goToScene: (sceneId: string) => void
  goToFrame: (frame: number) => void
  goToNextFrame: () => void
}

export interface Option {
  label: string
  onClick: (ctx: OptionContext) => void
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
  const {sceneId, goToFrame, goToNextFrame} = useSceneContext()
  const {frame} = useCommandContext()
  const ctx = React.useMemo(
    (): OptionContext => ({
      sceneId,
      frame,
      goToFrame,
      goToScene,
      goToNextFrame,
    }),
    [frame, goToFrame, goToNextFrame, goToScene, sceneId],
  )
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
              o.onClick(ctx)
            }}>
            {o.label}
          </Button>
        </Flex>
      ))}
    </Flex>
  )
}
