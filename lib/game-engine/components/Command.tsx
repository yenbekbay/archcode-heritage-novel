import {useIsMounted, useSyncedRef, useUnmountEffect} from '@react-hookz/web'
import type {AnimationControls, Variant} from 'framer-motion'
import {AnimatePresence, motion, useAnimation, usePresence} from 'framer-motion'
import {Howl} from 'howler'
import React from 'react'
import type {Statement, StatementBehavior} from '../contexts'
import {
  useBranchContext,
  useGameContext,
  useStatementContext,
} from '../contexts'

export type CommandViewColorScheme = 'default' | 'dark'

export type CommandViewAnimation = {
  initial: Variant
  entrance: Variant
  exit: Variant
}

export interface CommandAudioOptions {
  uri: string
  loop?: boolean
  fadeOut?: boolean
}

export interface CommandProps {
  name: string
  children: (controls: AnimationControls) => React.ReactNode
  behavior?: StatementBehavior
  audio?: string | CommandAudioOptions
  hide?: number | ((statement: Statement) => boolean)
  next?: number | string
  zIndex?: number | 'auto'
}

export function Command({
  name: command,
  children,
  behavior = ['skippable_static'],
  audio: _audio,
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

  const audio = React.useMemo(
    (): CommandAudioOptions | null =>
      _audio == null || typeof _audio === 'object'
        ? _audio ?? null
        : {uri: _audio},
    [_audio],
  )
  const visibleRef = useSyncedRef(visible)
  const [howl] = React.useState(() => {
    if (!audio) {
      return null
    }
    const ret = new Howl({
      src: audio.uri,
      loop: audio.loop,
      html5: true,
      onplayerror: () => {
        ret.once('unlock', () => {
          if (visibleRef.current && !ret.playing()) {
            ret.seek(0)
            ret.play()
          }
        })
      },
    })
    return ret
  })
  React.useEffect(
    () => {
      if (!howl) {
        return
      }
      if (visible) {
        howl.volume(1)
        howl.play()
      } else if (howl.playing()) {
        if (audio?.fadeOut) {
          howl.once('fade', () => {
            if (howl.volume() === 0) {
              howl.stop()
            }
          })
          howl.fade(1, 0, 4000)
        } else {
          howl.stop()
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visible],
  )
  useUnmountEffect(() => {
    if (!howl || !howl.playing()) {
      return
    }
    if (audio?.fadeOut) {
      howl.once('fade', () => {
        if (howl.volume() === 0) {
          howl.stop()
        }
      })
      howl.fade(1, 0, 4000)
    } else {
      howl.stop()
    }
  })

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
