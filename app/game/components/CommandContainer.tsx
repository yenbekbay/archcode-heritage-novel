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
  autoContinueTimeout: number
  autoContinue?: boolean
  retain?: boolean | number
}

export function CommandContainer({
  children,
  autoContinueTimeout,
  autoContinue = false,
  retain = false,
}: CommandContainerProps) {
  const {visible} = useCommandContext()

  const controls = useAnimation()
  const completedRef = React.useRef(false)
  useRegisterCommand(
    React.useMemo(
      (): CommandT => ({
        retainFor: (() => {
          if (typeof retain === 'number') {
            return Math.max(0, retain)
          }
          if (retain === true) {
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
      [controls, retain, completedRef],
    ),
  )

  return (
    <AnimatePresence>
      {visible && (
        <CommandView
          controls={controls}
          completedRef={completedRef}
          autoContinueTimeout={autoContinueTimeout}
          autoContinue={autoContinue}>
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
  autoContinueTimeout: number
  autoContinue: boolean
}

export function CommandView({
  children,
  controls,
  completedRef,
  autoContinueTimeout,
  autoContinue,
}: CommandViewProps) {
  const {index, goToNextFrame} = useCommandContext()
  const [isPresent, safeToRemove] = usePresence()

  const latestIsPresentRef = useLatestRef(isPresent)
  React.useLayoutEffect(
    () => {
      if (isPresent) {
        completedRef.current = false
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            controls.start('mount').then(() => {
              completedRef.current = true
              if (autoContinue) {
                setTimeout(() => {
                  if (latestIsPresentRef.current) {
                    goToNextFrame()
                  }
                }, autoContinueTimeout)
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
      css={{position: 'absolute', inset: 0, zIndex: index}}
      direction="column">
      {children(controls)}
    </Flex>
  )
}
