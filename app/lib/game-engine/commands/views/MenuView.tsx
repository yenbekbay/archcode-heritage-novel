import clsx from 'clsx'
import type {AnimationControls} from 'framer-motion'
import {motion} from 'framer-motion'
import React from 'react'
import type {
  CommandViewAnimation,
  CommandViewColorScheme,
} from '../../components'
import {useBranchContext, useGameContext} from '../../contexts'
import {playSound} from '../../utils'
import type {Frame} from './frame'
import {styleForFrame} from './frame'

interface MenuContext {
  goToBranch: (branchId: BranchId) => void
  goToStatement: (statementLabel: string) => void
  goToLocation: (branchId: BranchId, statementIndex: number) => void
  skip: (plusIndex?: number) => void
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
  scheme?: CommandViewColorScheme
  controls: AnimationControls
}

export function MenuView({
  choices,
  label,
  size = 'md',
  placement = 'bottom',
  scheme,
  controls,
}: MenuViewProps) {
  const {goToBranch, goToLocation} = useGameContext()
  const {containerSize, goToStatement, skip} = useBranchContext()
  const ctx = React.useMemo(
    (): MenuContext => ({
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
        'pointer-events-none absolute inset-0 flex flex-col p-8 pt-20',
        {
          top: 'justify-start',
          middle: 'justify-center',
          bottom: 'justify-end',
        }[placement],
      )}>
      <div className="pointer-events-auto flex flex-col items-center space-y-2">
        {!!label && (
          <motion.span
            className={clsx(
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

        {choices.map((c, idx) => {
          function click() {
            playSound(
              // prettier-ignore
              // eslint-disable-next-line no-sparse-arrays
              ...[2, 0.8, 999, , , , , 1.5, , 0.3, -99, 0.1, 1.63, , , 0.11, 0.22],
            )
            c.onClick(ctx)
          }
          return (
            <motion.div
              key={c.label}
              className="flex flex-col"
              variants={itemAnimation}
              initial="initial"
              animate={controls}
              custom={idx + 1}>
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
                    click()
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
                    click()
                  }}>
                  {c.label}
                </button>
              )}
            </motion.div>
          )
        })}
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
