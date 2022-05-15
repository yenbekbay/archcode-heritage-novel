import clsx from 'clsx'
import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import React from 'react'
import {useCommandContext} from './CommandContext'
import type {CommandViewVariants} from './CommandView'
import {useGameContext} from './GameContext'
import {useSceneContext} from './SceneContext'

interface ChoiceContext {
  sceneId: SceneId
  statementIndex: number
  goToScene: (sceneId: SceneId) => void
  goToStatement: (statementIndex: number) => void
  skip: () => void
}

export interface Choice {
  label: string
  onClick: (ctx: ChoiceContext) => void
}

export type ChoicesPlacement = 'top' | 'middle' | 'bottom'

export interface ChoicesViewProps {
  choices: Choice[]
  label?: string
  large?: boolean
  dark?: boolean
  placement?: ChoicesPlacement
  variants: CommandViewVariants
  controls: AnimationControls
}

export function ChoicesView({
  choices,
  label,
  large,
  dark,
  placement = 'bottom',
  variants,
  controls,
}: ChoicesViewProps) {
  const {goToScene} = useGameContext()
  const {sceneId, goToStatement, skip} = useSceneContext()
  const {statementIndex} = useCommandContext()
  const ctx = React.useMemo(
    (): ChoiceContext => ({
      sceneId,
      statementIndex,
      goToStatement,
      goToScene,
      skip,
    }),
    [statementIndex, goToStatement, skip, goToScene, sceneId],
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
              ? '0 -1px rgba(0, 0, 0, .35), 0 2px hsl(206, 24.0%, 9.0%), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0)'
              : '0 1px hsl(209, 12.2%, 93.2%), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255)',
          }}
          variants={variants}
          initial="initial"
          animate={controls}>
          {label}
        </motion.span>
      )}

      {choices.map((o, idx) => (
        <motion.div
          key={o.label}
          className="flex flex-col"
          variants={variants}
          initial="initial"
          animate={controls}
          custom={idx}>
          <motion.div
            className={clsx(
              'btn btn-ghost h-auto min-h-0 py-1 font-calligraph leading-6 shadow-md',
              large ? 'btn-xl text-2xl' : 'text-md btn-lg',
            )}
            style={{
              color: dark ? 'white' : 'hsl(206, 24.0%, 9.0%)',
              backgroundColor: dark
                ? 'rgba(0, 0, 0, .25)'
                : 'rgba(255, 255, 255, .25)',
              textShadow: dark
                ? '0 -1px rgba(0, 0, 0, .35), 0 2px hsl(206, 24.0%, 9.0%), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0)'
                : '0 1px hsl(209, 12.2%, 93.2%), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255)',
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
