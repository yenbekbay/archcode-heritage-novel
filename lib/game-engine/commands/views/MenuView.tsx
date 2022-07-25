import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import React from 'react'
import {twMerge} from 'tailwind-merge'
import type {
  CommandViewAnimation,
  CommandViewColorScheme,
} from '../../components'
import {useBranchContext, useGameContext} from '../../contexts'
import type {Frame} from './frame'
import {styleForFrame} from './frame'

interface MenuContext {
  goToBranch: (branchId: BranchId) => void
  goToStatement: (statementLabel: string) => void
  goToLocation: (branchId: BranchId, statementIndex: number) => void
  goToNextStatement: (plusIndex?: number) => void
}

export interface Choice {
  label: string
  frame?: Frame
  onClick: (ctx: MenuContext) => void
}

export type MenuSize = 'md' | 'lg'
export type MenuPlacement = 'top' | 'middle' | 'bottom'

export interface MenuViewProps {
  choices: Choice[]
  label?: string
  size?: MenuSize
  placement?: MenuPlacement
  style?: React.CSSProperties
  scheme?: CommandViewColorScheme
  controls: AnimationControls
}

export function MenuView({
  choices,
  label,
  size = 'md',
  placement = 'bottom',
  style,
  scheme,
  controls,
}: MenuViewProps) {
  const {goToBranch, goToLocation, playSound} = useGameContext()
  const {containerRect, goToStatement, goToNextStatement} = useBranchContext()
  const ctx = React.useMemo(
    (): MenuContext => ({
      goToBranch,
      goToLocation,
      goToStatement,
      goToNextStatement,
    }),
    [goToBranch, goToLocation, goToStatement, goToNextStatement],
  )
  return (
    <div
      className={twMerge(
        'pointer-events-none absolute inset-0 flex flex-col p-8 py-20',
        {
          top: 'justify-start',
          middle: 'justify-center',
          bottom: 'justify-end',
        }[placement],
      )}
      style={style}>
      <div className="pointer-events-auto flex flex-col items-center space-y-2">
        {!!label && (
          <motion.span
            className={twMerge(
              'GameEngine-text mb-2 whitespace-pre-wrap text-center font-calligraph text-lg',
              scheme === 'dark' && 'GameEngine-text--dark',
            )}
            variants={itemAnimation}
            initial="initial"
            animate={controls}
            custom={0}>
            {label}
          </motion.span>
        )}

        {choices.map((c, idx) => (
          <motion.div
            key={c.label}
            className="flex flex-col"
            variants={itemAnimation}
            initial="initial"
            animate={controls}
            custom={idx + 1}>
            {c.frame ? (
              <motion.div
                className={twMerge(
                  'GameEngine-surface btn btn-ghost border',
                  scheme === 'dark' && 'GameEngine-surface--dark',
                )}
                aria-label={c.label}
                style={styleForFrame({containerRect}, c.frame)}
                animate={{opacity: 0}}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 1,
                  ease: 'easeInOut',
                }}
                tabIndex={-1}
                onMouseEnter={() => playSound('mouseover')}
                onClick={(event) => {
                  event.stopPropagation()
                  playSound('click')
                  c.onClick(ctx)
                }}
              />
            ) : (
              <button
                className={twMerge(
                  'GameEngine-button btn btn-ghost h-auto min-h-0 animate-bounce-gentle py-1 font-calligraph leading-6 shadow-md',
                  scheme === 'dark' && 'GameEngine-button--dark',
                  {
                    md: 'text-md btn-lg',
                    lg: 'btn-xl text-2xl',
                  }[size],
                )}
                style={{animationDelay: `calc(0.05 * ${idx}s)`}}
                onMouseEnter={() => playSound('mouseover')}
                onClick={(event) => {
                  event.stopPropagation()
                  playSound('click')
                  c.onClick(ctx)
                }}>
                {c.label}
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const itemAnimation: CommandViewAnimation = {
  initial: {opacity: 0},
  entrance: (idx) => ({
    opacity: 1,
    transition: {delay: 0.5 + 0.25 * idx},
  }),
  exit: {
    opacity: 0,
    transition: {duration: 0.5, ease: 'easeOut'},
  },
}
