import {
  useIsMounted,
  useMountEffect,
  useSyncedRef,
  useUnmountEffect,
  useUpdateEffect,
} from '@react-hookz/web'
import type {AnimationControls, Variant} from 'framer-motion'
import {AnimatePresence, motion, useAnimation, usePresence} from 'framer-motion'
import React from 'react'
import {useWindowFocus} from '../../hooks'
import type {Statement, StatementBehavior} from '../contexts'
import {
  useBranchContext,
  useGameContext,
  useStatementContext,
} from '../contexts'
import type {AudioSource} from './internal'
import {useAudio} from './internal'

export type CommandViewColorScheme = 'default' | 'dark'

export type CommandViewAnimation = {
  initial: Variant
  entrance: Variant
  exit: Variant
}

export interface CommandAudioConfig {
  whileVisible?: string | AudioSource
  onEntrance?: string
  onExit?: string
}

export interface CommandProps {
  name: string
  children: (controls: AnimationControls) => React.ReactNode
  behavior?: StatementBehavior
  audio?: CommandAudioConfig
  hide?: number | ((statement: Statement) => boolean)
  next?: number | string
  zIndex?: number | 'auto'
}

export function Command({
  name: command,
  children,
  behavior = ['skippable_static'],
  audio: audioSrc,
  hide = 0,
  next = 1,
  zIndex = 'auto',
}: CommandProps) {
  const {register, visible} = useStatementContext()

  const viewRef = React.useRef<CommandViewInstance>(null)
  React.useEffect(
    () =>
      register({
        command,
        behavior,
        hide,
        next,
        enter: () => viewRef.current?.enter() ?? false,
        pause: () => viewRef.current?.pause(),
        resume: () => viewRef.current?.resume(),
      }),
    [behavior, command, hide, next, register],
  )

  const whileVisibleAudio = useAudio(
    audioSrc?.whileVisible
      ? {
          channel: 'main',
          ...(typeof audioSrc.whileVisible === 'object'
            ? audioSrc.whileVisible
            : {uri: audioSrc.whileVisible}),
        }
      : null,
  )
  const onEntranceAudio = useAudio(
    audioSrc?.onEntrance
      ? {uri: audioSrc.onEntrance, channel: 'entrance'}
      : null,
  )
  const onExitAudio = useAudio(
    audioSrc?.onExit ? {uri: audioSrc.onExit, channel: 'exit'} : null,
  )

  const visibleRef = useSyncedRef(visible)
  const mountedRef = React.useRef(false)
  const handledStateRef = React.useRef<'visible' | 'hidden'>('hidden')
  const playControllerRef = React.useRef<AbortController | null>(null)
  async function handleVisible() {
    if (handledStateRef.current === 'visible') {
      return
    }

    handledStateRef.current = 'visible'

    const controller = new AbortController()
    playControllerRef.current?.abort()
    playControllerRef.current = controller

    onExitAudio?.stop()
    if (onEntranceAudio) {
      if (whileVisibleAudio?.src.overlap) {
        onEntranceAudio.play()
      } else {
        await onEntranceAudio.play()
        if (
          !visibleRef.current ||
          !mountedRef.current ||
          controller.signal.aborted
        ) {
          return
        }
      }
    }
    whileVisibleAudio?.play()
  }
  async function handleHidden() {
    if (handledStateRef.current === 'hidden') {
      return
    }

    handledStateRef.current = 'hidden'

    const controller = new AbortController()
    playControllerRef.current?.abort()
    playControllerRef.current = controller

    onEntranceAudio?.stop()
    if (whileVisibleAudio) {
      if (whileVisibleAudio?.src.overlap) {
        whileVisibleAudio.stop()
      } else {
        await whileVisibleAudio.stop()
        if (
          visibleRef.current ||
          mountedRef.current ||
          controller.signal.aborted
        ) {
          return
        }
      }
    }
    await onExitAudio?.play()
  }

  useMountEffect(() => {
    if (mountedRef.current) {
      return
    }
    mountedRef.current = true
    setTimeout(() => {
      setTimeout(() => {
        if (!visibleRef.current || !mountedRef.current) {
          return
        }
        handleVisible()
      })
    })
  })
  useUnmountEffect(() => {
    if (!mountedRef.current) {
      return
    }
    mountedRef.current = false
    setTimeout(() => {
      if (mountedRef.current) {
        return
      }
      handleHidden()
    })
  })
  useUpdateEffect(() => {
    if (visible) {
      setTimeout(() => {
        setTimeout(() => {
          if (!visibleRef.current || !mountedRef.current) {
            return
          }
          handleVisible()
        })
      })
    } else {
      setTimeout(() => {
        if (visibleRef.current || !mountedRef.current) {
          return
        }
        handleHidden()
      })
    }
  }, [visible])

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
  const {goToNextStatement} = useBranchContext()
  const {statementIndex, focused} = useStatementContext()
  const [isPresent, safeToRemove] = usePresence()
  const isMounted = useIsMounted()
  const windowFocused = useWindowFocus()

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
  const windowFocusedRef = useSyncedRef(windowFocused)

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
          if (
            countdownPausedRef.current ||
            gamePausedRef.current ||
            !windowFocusedRef.current
          ) {
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
          goToNextStatement()
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
            className="progress absolute top-0 z-[100] w-full rounded-none"
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
