import {AnimatePresence, useAnimation, usePresence} from 'framer-motion'
import type {
  AnimationControls,
  ControlsAnimationDefinition,
} from 'framer-motion/types/animation/types'
import React from 'react'
import {Flex, useLatestRef} from '~/lib'
import {usePanelContext, useRegisterPanel} from './PanelContext'
import {PanelT} from './SceneContext'

export interface CommandContainerProps {
  children: (controls: AnimationControls) => React.ReactNode
  mountAnimation: ControlsAnimationDefinition
  exitAnimation: ControlsAnimationDefinition
  autoContinueTimeout?: number
  autoContinue?: boolean
  fixed?: boolean
}

export function CommandContainer({
  children,
  mountAnimation,
  exitAnimation,
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
          controls.set({opacity: 1})
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
          mountAnimation={mountAnimation}
          exitAnimation={exitAnimation}
          autoContinueTimeout={
            autoContinueTimeout ?? DEFAULT_AUTO_CONTINUE_TIMEOUT
          }
          autoContinue={autoContinue}>
          {children}
        </CommandView>
      )}
    </AnimatePresence>
  )
}

const DEFAULT_AUTO_CONTINUE_TIMEOUT = 4000

// MARK: CommandView

export interface CommandViewProps {
  children: (controls: AnimationControls) => React.ReactNode
  controls: AnimationControls
  skippedRef: React.MutableRefObject<boolean>
  mountAnimation: ControlsAnimationDefinition
  exitAnimation: ControlsAnimationDefinition
  autoContinueTimeout: number
  autoContinue: boolean
}

export function CommandView({
  children,
  controls,
  skippedRef,
  mountAnimation,
  exitAnimation,
  autoContinueTimeout,
  autoContinue,
}: CommandViewProps) {
  const {index, skipToNextPanel} = usePanelContext()
  const [isPresent, safeToRemove] = usePresence()

  // Animate on mount
  const latestIsPresentRef = useLatestRef(isPresent)
  React.useLayoutEffect(
    () => {
      if (isPresent) {
        skippedRef.current = false
        requestAnimationFrame(() =>
          controls.start(mountAnimation).then(() => {
            skippedRef.current = true
            if (autoContinue && latestIsPresentRef.current) {
              setTimeout(() => skipToNextPanel(), autoContinueTimeout)
            }
          }),
        )
        return controls.stop
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPresent],
  )

  // Animate on exit
  React.useLayoutEffect(() => {
    if (!isPresent) {
      controls.start(exitAnimation).then(() => safeToRemove?.())
      return controls.stop
    }
  }, [controls, exitAnimation, isPresent, safeToRemove])

  return (
    <Flex
      css={{position: 'absolute', inset: 0, zIndex: index}}
      direction="column">
      {children(controls)}
    </Flex>
  )
}
