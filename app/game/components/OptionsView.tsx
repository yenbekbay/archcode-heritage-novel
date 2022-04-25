import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import React from 'react'
import type {CommandViewVariants} from './CommandContainer'
import {useCommandContext} from './CommandContext'
import {useGameContext} from './GameContext'
import {useSceneContext} from './SceneContext'
import clsx from 'clsx'

interface OptionContext {
  sceneId: SceneId
  frame: number
  goToScene: (sceneId: SceneId) => void
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
    <div
      className={clsx(
        'absolute inset-0 flex flex-col items-center space-y-2 p-8 pt-20',
        placement === 'bottom' ? 'justify-end' : 'justify-start',
      )}>
      {options.map((o, idx) => (
        <motion.div
          key={o.label}
          className="flex flex-col"
          variants={variants}
          initial="initial"
          animate={controls}
          custom={idx}>
          <motion.div
            className="btn btn-ghost btn-lg h-10 min-h-0 font-calligraph shadow-md"
            style={{
              color: dark ? 'white' : 'hsl(206, 24.0%, 9.0%)',
              backgroundColor: dark
                ? 'hsla(0, 0%, 0%, .2)'
                : 'hsla(0, 100%, 100%, .2)',
              textShadow: dark
                ? '0 1px hsl(206, 24.0%, 9.0%)'
                : '0 1px hsl(209, 12.2%, 93.2%)',
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
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
