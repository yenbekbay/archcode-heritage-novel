import clsx from 'clsx'
import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import React from 'react'
import type {
  CommandViewAnimation,
  CommandViewColorScheme,
} from '../../components'
import {useBranchContext, useGameContext} from '../../contexts'
import type {Frame} from './frame'
import {styleForFrame} from './frame'

interface ChoiceContext<TStatementLabel extends string = string> {
  goToBranch: (branchId: BranchId) => void
  goToStatement: (statementLabel: TStatementLabel) => void
  goToLocation: (branchId: BranchId, statementIndex: number) => void
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
  scheme?: CommandViewColorScheme
  animation: CommandViewAnimation
  controls: AnimationControls
}

export function ChoicesView({
  choices,
  label,
  size = 'md',
  placement = 'bottom',
  scheme,
  animation,
  controls,
}: ChoicesViewProps) {
  const {goToBranch, goToLocation} = useGameContext()
  const {containerSize, goToStatement, skip} = useBranchContext()
  const ctx = React.useMemo(
    (): ChoiceContext => ({
      goToStatement,
      goToBranch,
      goToLocation,
      skip,
    }),
    [goToBranch, goToLocation, goToStatement, skip],
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
          className={clsx(
            'GameEngine-text mb-2 whitespace-pre-wrap text-center font-calligraph text-lg',
            scheme === 'dark' && 'GameEngine-text--dark',
          )}
          variants={animation}
          initial="initial"
          animate={controls}>
          {label}
        </motion.span>
      )}

      {choices.map((c, idx) => (
        <motion.div
          key={c.label}
          className="flex flex-col"
          variants={animation}
          initial="initial"
          animate={controls}
          custom={idx}>
          {c.frame ? (
            <motion.div
              className={clsx(
                'GameEngine-surface btn btn-ghost border',
                scheme === 'dark' && 'GameEngine-surface--dark',
              )}
              aria-label={c.label}
              style={styleForFrame({containerSize}, c.frame)}
              animate={{opacity: 0}}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1,
                ease: 'easeInOut',
              }}
              tabIndex={-1}
              onClick={(event) => {
                event.stopPropagation()
                c.onClick(ctx)
              }}
            />
          ) : (
            <button
              className={clsx(
                'GameEngine-button btn btn-ghost h-auto min-h-0 animate-bounce-gentle py-1 font-calligraph leading-6 shadow-md',
                scheme === 'dark' && 'GameEngine-button--dark',
                {
                  md: 'text-md btn-lg',
                  lg: 'btn-xl text-2xl',
                }[size],
              )}
              style={{animationDelay: `calc(0.05 * ${idx}s)`}}
              onClick={(event) => {
                event.stopPropagation()
                c.onClick(ctx)
              }}>
              {c.label}
            </button>
          )}
        </motion.div>
      ))}
    </div>
  )
}
