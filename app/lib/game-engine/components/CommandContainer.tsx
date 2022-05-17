import {AnimatePresence} from 'framer-motion'
import type {AnimationControls} from 'framer-motion/types/animation/types'
import React from 'react'
import type {Statement} from '../contexts'
import {useCommandContext, useRegisterStatement} from '../contexts'
import type {CommandViewInstance} from './CommandView'
import {CommandView} from './CommandView'

export interface CommandContainerProps {
  children: (controls: AnimationControls) => React.ReactNode
  durationMs?: number
  skippable?: boolean
  /** Should scene automatically skip to next statementIndex after duration? */
  transitory?: boolean
  /** Should content still be shown after skipping to next statementIndex? */
  lingers?: boolean | number
}

export function CommandContainer({
  children,
  durationMs = 0,
  skippable = false,
  transitory = false,
  lingers = false,
}: CommandContainerProps) {
  const {visible} = useCommandContext()

  const viewRef = React.useRef<CommandViewInstance>(null)
  useRegisterStatement(
    React.useMemo(
      (): Omit<Statement, 'index' | 'label'> => ({
        skippable,
        visibleExtra: (() => {
          if (typeof lingers === 'number') {
            return Math.max(0, lingers)
          }
          if (lingers === true) {
            return Number.MAX_SAFE_INTEGER
          }
          return 0
        })(),
        enter: () => viewRef.current?.enter() ?? false,
        pause: () => viewRef.current?.pause(),
        resume: () => viewRef.current?.resume(),
      }),
      [skippable, lingers],
    ),
  )

  return (
    <AnimatePresence>
      {visible && (
        <CommandView
          ref={viewRef}
          durationMs={durationMs}
          skippable={skippable}
          transitory={transitory}>
          {children}
        </CommandView>
      )}
    </AnimatePresence>
  )
}
