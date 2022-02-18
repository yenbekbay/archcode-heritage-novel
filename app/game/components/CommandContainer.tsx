import {
  AnimatePresence,
  useAnimation,
  usePresence,
  Variant,
} from 'framer-motion'
import type {AnimationControls} from 'framer-motion/types/animation/types'
import React from 'react'
import {Flex, useLatestRef} from '~/lib'
import {usePanelContext, useRegisterPanel} from './PanelContext'
import {PanelT} from './SceneContext'

export interface CommandContainerProps {
  children: (controls: AnimationControls) => React.ReactNode
  autoContinueTimeout: number
  autoContinue?: boolean
  fixed?: boolean
}

export function CommandContainer({
  children,
  autoContinueTimeout,
  autoContinue = false,
  fixed = false,
}: CommandContainerProps) {
  const {visible} = usePanelContext()

  const controls = useAnimation()
  const skippedRef = React.useRef(false)
  useRegisterPanel(
    React.useMemo(
      (): PanelT => ({
        fixed,
        skip: () => {
          if (skippedRef.current) {
            return false
          }

          skippedRef.current = true
          controls.stop()
          controls.set('mount')
          return true
        },
      }),
      [controls, fixed, skippedRef],
    ),
  )

  return (
    <AnimatePresence>
      {visible && (
        <CommandView
          controls={controls}
          skippedRef={skippedRef}
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
  skippedRef: React.MutableRefObject<boolean>
  autoContinueTimeout: number
  autoContinue: boolean
}

export function CommandView({
  children,
  controls,
  skippedRef,
  autoContinueTimeout,
  autoContinue,
}: CommandViewProps) {
  const {index, skipToNextPanel} = usePanelContext()
  const [isPresent, safeToRemove] = usePresence()

  const latestIsPresentRef = useLatestRef(isPresent)
  React.useLayoutEffect(
    () => {
      if (isPresent) {
        skippedRef.current = false
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            controls.start('mount').then(() => {
              skippedRef.current = true
              if (autoContinue && latestIsPresentRef.current) {
                setTimeout(() => skipToNextPanel(), autoContinueTimeout)
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
