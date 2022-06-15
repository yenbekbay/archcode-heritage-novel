import {useIsMounted, useSyncedRef} from '@react-hookz/web'
import type {Variant} from 'framer-motion'
import {AnimatePresence, motion, useAnimation, usePresence} from 'framer-motion'
import type {AnimationControls} from 'framer-motion/types/animation/types'
import React from 'react'
import type {
  Statement,
  StatementBehavior,
  StatementVisibility,
} from '../contexts'
import {
  useBranchContext,
  useGameContext,
  useRegisterStatement,
  useStatementContext,
} from '../contexts'

export type CommandViewColorScheme = 'default' | 'dark'

export type CommandViewAnimation = {
  initial: Variant
  entrance: Variant
  exit: Variant
}

export interface CommandProps {
  children: (controls: AnimationControls) => React.ReactNode
  behavior?: StatementBehavior
  visibility?: StatementVisibility
  zIndex?: number | 'auto'
}

export function Command({
  children,
  behavior = ['skippable_static'],
  visibility = 0,
  zIndex = 'auto',
}: CommandProps) {
  const {visible} = useStatementContext()

  const viewRef = React.useRef<CommandViewInstance>(null)
  useRegisterStatement(
    React.useMemo(
      (): Omit<Statement, 'index' | 'label'> => ({
        behavior,
        visibility,
        enter: () => viewRef.current?.enter() ?? false,
        pause: () => viewRef.current?.pause(),
        resume: () => viewRef.current?.resume(),
      }),
      [behavior, visibility],
    ),
  )

  return (
    <AnimatePresence>
      {visible && (
        <CommandView ref={viewRef} behavior={behavior} zIndex={zIndex}>
          {children}
        </CommandView>
      )}
    </AnimatePresence>
  )
}

// MARK: CommandView

interface CommandViewProps {
  children: (controls: AnimationControls) => React.ReactNode
  behavior: StatementBehavior
  zIndex: 'auto' | number
}

interface CommandViewInstance {
  enter: () => void
  pause: () => void
  resume: () => void
}

const CommandView = React.forwardRef(function CommandView(
  {children, behavior, zIndex}: CommandViewProps,
  forwardedRef: React.ForwardedRef<CommandViewInstance>,
) {
  const {paused: gamePaused} = useGameContext()
  const {skip} = useBranchContext()
  const {statementIndex, focused} = useStatementContext()
  const [isPresent, safeToRemove] = usePresence()
  const isMounted = useIsMounted()

  const enteredRef = React.useRef(false)
  const [entered, _setEntered] = React.useState(false)
  const setEntered = React.useCallback((newEntered: boolean) => {
    enteredRef.current = newEntered
    _setEntered(newEntered)
  }, [])

  const controls = useAnimation()
  const [countdownProgress, setCountdownProgress] = React.useState(0)
  const countdownTimerRef = React.useRef<ReturnType<typeof setInterval>>()
  const countdownPausedRef = React.useRef(false)
  const gamePausedRef = useSyncedRef(gamePaused)

  React.useImperativeHandle(
    forwardedRef,
    (): CommandViewInstance => ({
      enter: () => {
        if (enteredRef.current) {
          return false
        }

        controls.stop()
        controls.set('entrance')
        setEntered(true)
        return true
      },
      pause: () => {
        countdownPausedRef.current = true
      },
      resume: () => {
        countdownPausedRef.current = false
      },
    }),
    [controls, setEntered],
  )

  React.useEffect(
    () => {
      if (isPresent) {
        setEntered(false)
        requestAnimationFrame(() =>
          requestAnimationFrame(() =>
            controls.start('entrance').then(() => setEntered(true)),
          ),
        )
      } else {
        controls.start('exit').then(() => safeToRemove?.())
      }
      return controls.stop
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPresent],
  )

  React.useEffect(
    () => {
      if (behavior[0] === 'skippable_timed' && entered && focused) {
        setCountdownProgress(0)
        countdownTimerRef.current = setInterval(() => {
          if (countdownPausedRef.current || gamePausedRef.current) {
            return
          }

          if (isMounted()) {
            setCountdownProgress((prev) => prev + 1)
          } else if (countdownTimerRef.current) {
            clearInterval(countdownTimerRef.current)
            countdownTimerRef.current = undefined
          }
        }, behavior[1].durationMs / 100)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entered, focused],
  )

  React.useEffect(
    () => {
      if (countdownProgress === 100) {
        if (countdownTimerRef.current) {
          clearInterval(countdownTimerRef.current)
          countdownTimerRef.current = undefined
        }
        if (focused) {
          skip()
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [countdownProgress],
  )

  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{zIndex: zIndex === 'auto' ? statementIndex : zIndex}}>
      <AnimatePresence>
        {behavior[0] === 'skippable_timed' && focused && (
          <motion.progress
            className="progress absolute top-0 z-50 w-full rounded-none"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            value={countdownProgress}
            max={100}
          />
        )}
      </AnimatePresence>

      {children(controls)}
    </div>
  )
})
