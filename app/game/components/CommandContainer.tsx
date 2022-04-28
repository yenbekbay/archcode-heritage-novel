import type {Variant} from 'framer-motion'
import {AnimatePresence, motion, useAnimation, usePresence} from 'framer-motion'
import type {AnimationControls} from 'framer-motion/types/animation/types'
import React from 'react'
import {useIsMounted} from '@react-hookz/web'
import {useCommandContext, useRegisterCommand} from './CommandContext'
import type {CommandT} from './SceneContext'
import {useSceneContext} from './SceneContext'

export interface CommandContainerProps {
  children: (controls: AnimationControls) => React.ReactNode
  durationMs?: number
  skippable?: boolean
  /** Should scene automatically skip to next frame after duration? */
  transitory?: boolean
  /** Should content still be shown after skipping to next frame? */
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
  useRegisterCommand(
    React.useMemo(
      (): CommandT => ({
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
        enter() {
          return viewRef.current?.enter() ?? false
        },
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

// MARK: CommandView

export type CommandViewVariants = {
  initial: Variant
  entrance: Variant
  exit: Variant
}

export interface CommandViewProps {
  children: (controls: AnimationControls) => React.ReactNode
  durationMs: number
  skippable: boolean
  transitory: boolean
}

export interface CommandViewInstance {
  enter: () => void
}

export const CommandView = React.forwardRef(function CommandView(
  {children, durationMs, skippable, transitory}: CommandViewProps,
  forwardedRef: React.ForwardedRef<CommandViewInstance>,
) {
  const {goToNextFrame} = useSceneContext()
  const {frame, focused} = useCommandContext()
  const [isPresent, safeToRemove] = usePresence()
  const isMounted = useIsMounted()

  const enteredRef = React.useRef(false)
  const [entered, _setEntered] = React.useState(false)
  const setEntered = React.useCallback((newEntered: boolean) => {
    enteredRef.current = newEntered
    _setEntered(newEntered)
  }, [])

  const controls = useAnimation()
  React.useImperativeHandle(
    forwardedRef,
    (): CommandViewInstance => ({
      enter() {
        if (enteredRef.current) {
          return false
        }

        controls.stop()
        controls.set('entrance')
        setEntered(true)
        return true
      },
    }),
    [controls, setEntered],
  )

  const [countdownProgress, setCountdownProgress] = React.useState(0)
  const countdownTimerRef = React.useRef<ReturnType<typeof setInterval>>()

  React.useEffect(
    () => {
      setCountdownProgress(0)
      if (skippable && transitory && entered && focused) {
        countdownTimerRef.current = setInterval(() => {
          if (isMounted()) {
            setCountdownProgress((prev) => prev + 1)
          } else if (countdownTimerRef.current) {
            clearInterval(countdownTimerRef.current)
            countdownTimerRef.current = undefined
          }
        }, durationMs / 100)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entered],
  )

  React.useEffect(
    () => {
      if (countdownProgress === 100) {
        if (countdownTimerRef.current) {
          clearInterval(countdownTimerRef.current)
          countdownTimerRef.current = undefined
        }
        if (focused) {
          goToNextFrame()
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [countdownProgress],
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

  return (
    <div className="absolute inset-0 flex flex-col" style={{zIndex: frame}}>
      <AnimatePresence>
        {skippable && transitory && entered && focused && (
          <motion.progress
            className="progress absolute top-0 w-full rounded-none"
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
