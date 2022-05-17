import clsx from 'clsx'
import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import React from 'react'
import {useCommandContext, useGameContext, useSceneContext} from '../contexts'
import type {Frame} from '../utils'
import {styleForFrame} from '../utils'
import type {CommandViewVariants} from './CommandView'

interface ChoiceContext<TStatementLabel extends string = string> {
  sceneId: SceneId
  statementIndex: number
  goToScene: (sceneId: SceneId) => void
  goToStatement: (statementLabel: TStatementLabel) => void
  skip: () => void
}

export interface Choice<TStatementLabel extends string> {
  label: string
  frame?: Frame
  onClick: (ctx: ChoiceContext<TStatementLabel>) => void
}

export type ChoicesPlacement = 'top' | 'middle' | 'bottom'

export interface ChoicesViewProps<TStatementLabel extends string = string> {
  choices: Choice<TStatementLabel>[]
  label?: string
  size?: 'md' | 'lg'
  placement?: ChoicesPlacement
  variant?: 'default' | 'dark'
  variants: CommandViewVariants
  controls: AnimationControls
}

export function ChoicesView({
  choices,
  label,
  size = 'md',
  placement = 'bottom',
  variant,
  variants,
  controls,
}: ChoicesViewProps) {
  const {goToScene} = useGameContext()
  const {sceneId, containerSize, goToStatement, skip} = useSceneContext()
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
            color: variant === 'dark' ? '#fBf9e0' : 'hsl(206, 24.0%, 9.0%)',
            textShadow:
              variant === 'dark'
                ? '0 -1px rgba(0, 0, 0, .35), 0 2px hsl(206, 24.0%, 9.0%), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0), 0 0 4px rgba(0, 0, 0)'
                : '0 1px hsl(209, 12.2%, 93.2%), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255), 0 0 4px rgba(255, 255, 255)',
          }}
          variants={variants}
          initial="initial"
          animate={controls}>
          {label}
        </motion.span>
      )}

      {choices.map((c, idx) => (
        <motion.div
          key={c.label}
          className="flex flex-col"
          variants={variants}
          initial="initial"
          animate={controls}
          custom={idx}>
          {c.frame ? (
            <motion.div
              className="btn btn-ghost border"
              aria-label={c.label}
              style={{
                borderColor:
                  variant === 'dark' ? 'white' : 'hsl(206, 24.0%, 9.0%)',
                backgroundColor:
                  variant === 'dark'
                    ? 'rgba(0, 0, 0, .5)'
                    : 'rgba(255, 255, 255, .5)',
                boxShadow: '0 2px rgba(0, 0, 0, .35)',
                ...styleForFrame({containerSize}, c.frame),
              }}
              animate={{opacity: 0}}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1,
                ease: 'easeInOut',
              }}
              onClick={(event) => {
                event.stopPropagation()
                c.onClick(ctx)
              }}
            />
          ) : (
            <motion.div
              className={clsx(
                'btn btn-ghost h-auto min-h-0 py-1 font-calligraph leading-6 shadow-md',
                {
                  md: 'text-md btn-lg',
                  lg: 'btn-xl text-2xl',
                }[size],
              )}
              style={{
                color: variant === 'dark' ? 'white' : 'hsl(206, 24.0%, 9.0%)',
                backgroundColor:
                  variant === 'dark'
                    ? 'rgba(0, 0, 0, .25)'
                    : 'rgba(255, 255, 255, .25)',
                textShadow:
                  variant === 'dark'
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
                c.onClick(ctx)
              }}>
              {c.label}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
