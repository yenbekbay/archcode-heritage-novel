import clsx from 'clsx'
import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import React from 'react'
import {useCommandContext} from './CommandContext'
import type {CommandViewVariants} from './CommandView'
import {useGameContext} from './GameContext'
import {useSceneContext} from './SceneContext'

interface OptionContext {
  sceneId: SceneId
  frameIndex: number
  goToScene: (sceneId: SceneId) => void
  goToFrame: (frameIndex: number) => void
  skip: () => void
}

export interface Option {
  label: string
  onClick: (ctx: OptionContext) => void
}

export type OptionsPlacement = 'top' | 'middle' | 'bottom'

export interface OptionsViewProps {
  options: Option[]
  label?: string
  large?: boolean
  dark?: boolean
  placement?: OptionsPlacement
  variants: CommandViewVariants
  controls: AnimationControls
}

export function OptionsView({
  options,
  label,
  large,
  dark,
  placement = 'bottom',
  variants,
  controls,
}: OptionsViewProps) {
  const {goToScene} = useGameContext()
  const {sceneId, goToFrame, skip} = useSceneContext()
  const {frameIndex} = useCommandContext()
  const ctx = React.useMemo(
    (): OptionContext => ({
      sceneId,
      frameIndex,
      goToFrame,
      goToScene,
      skip,
    }),
    [frameIndex, goToFrame, skip, goToScene, sceneId],
  )
  return (
    <div
      className={clsx(
        'absolute inset-0 flex flex-col items-center space-y-2 p-8 pt-20',
        {
          top: 'justify-start',
          middle: 'justify-center',
          bottom: 'justify-end',
        }[placement],
      )}>
      {!!label && (
        <motion.span
          className="mb-2 whitespace-pre-wrap text-center font-calligraph text-lg"
          style={{
            color: dark ? '#fBf9e0' : 'hsl(206, 24.0%, 9.0%)',
            textShadow: dark
              ? '0 -1px rgba(0, 0, 0, 0.35), 0 2px hsl(206, 24.0%, 9.0%)'
              : '0 1px hsl(209, 12.2%, 93.2%)',
          }}
          variants={variants}
          initial="initial"
          animate={controls}>
          {label}
        </motion.span>
      )}

      {options.map((o, idx) => (
        <motion.div
          key={o.label}
          className="flex flex-col"
          variants={variants}
          initial="initial"
          animate={controls}
          custom={idx}>
          <motion.div
            className={clsx(
              'btn btn-ghost min-h-0 font-calligraph shadow-md',
              large ? 'btn-xl h-12 text-2xl' : 'text-md btn-lg h-10',
            )}
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
            onClick={(event) => {
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
