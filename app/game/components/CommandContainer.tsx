import {
  AnimatePresence,
  useAnimation,
  usePresence,
  Variant,
} from 'framer-motion'
import type {AnimationControls} from 'framer-motion/types/animation/types'
import React from 'react'
import {Flex, useLatestRef} from '~/lib'
import {useCommandContext, useRegisterCommand} from './CommandContext'
import {CommandT} from './SceneContext'

export interface CommandContainerProps {
  children: (controls: AnimationControls) => React.ReactNode
  duration?: number
  skippable?: boolean
  transitory?: boolean
  retained?: boolean | number
}

export function CommandContainer({
  children,
  duration = 0,
  skippable = false,
  transitory = false,
  retained = false,
}: CommandContainerProps) {
  const {visible} = useCommandContext()

  const controls = useAnimation()
  const completedRef = React.useRef(false)
  useRegisterCommand(
    React.useMemo(
      (): CommandT => ({
        skippable,
        retainedFor: (() => {
          if (typeof retained === 'number') {
            return Math.max(0, retained)
          }
          if (retained === true) {
            return Number.MAX_SAFE_INTEGER
          }
          return 0
        })(),
        complete: () => {
          if (completedRef.current) {
            return false
          }

          completedRef.current = true
          controls.stop()
          controls.set('mount')
          return true
        },
      }),
      [skippable, retained, controls],
    ),
  )

  return (
    <AnimatePresence>
      {visible && (
        <CommandView
          controls={controls}
          completedRef={completedRef}
          duration={duration}
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
  mount: Variant
  exit: Variant
}

export interface CommandViewProps {
  children: (controls: AnimationControls) => React.ReactNode
  controls: AnimationControls
  completedRef: React.MutableRefObject<boolean>
  duration: number
  skippable: boolean
  transitory: boolean
}

export function CommandView({
  children,
  controls,
  completedRef,
  duration,
  skippable,
  transitory,
}: CommandViewProps) {
  const {frame, active, goToNextFrame} = useCommandContext()
  const [isPresent, safeToRemove] = usePresence()

  const latestActiveRef = useLatestRef(active)
  React.useLayoutEffect(
    () => {
      if (isPresent) {
        completedRef.current = false
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            controls.start('mount').then(() => {
              completedRef.current = true
              if (skippable && transitory) {
                setTimeout(() => {
                  if (latestActiveRef.current) {
                    goToNextFrame()
                  }
                }, duration)
              }
            })
          }),
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
    <Flex
      css={{position: 'absolute', inset: 0, zIndex: frame}}
      direction="column">
      {children(controls)}
    </Flex>
  )
}
