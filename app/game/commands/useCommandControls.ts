import {usePanelContext, useRegisterPanel} from '../components'
import {useAnimation, usePresence} from 'framer-motion'
import type {ControlsAnimationDefinition} from 'framer-motion/types/animation/types'
import React from 'react'
import {useLatestRef} from '~/lib'

export function useCommandControls({
  entryAnimation,
  shouldContinue,
}: {
  entryAnimation: ControlsAnimationDefinition
  shouldContinue?: boolean
}) {
  const controls = useAnimation()
  const skippedRef = React.useRef(false)
  const [isPresent, safeToRemove] = usePresence()
  const {skipToNextPanel} = usePanelContext()

  useRegisterPanel(
    React.useMemo(
      () => ({
        onSkip: () => {
          if (skippedRef.current) {
            return false
          }

          skippedRef.current = true
          controls.stop()
          controls.set({opacity: 1})
          return true
        },
      }),
      [controls],
    ),
  )

  // Animate on mount
  const latestIsPresentRef = useLatestRef(isPresent)
  React.useLayoutEffect(
    () => {
      if (isPresent) {
        skippedRef.current = false
        controls.start(entryAnimation).then(() => {
          skippedRef.current = true
          if (shouldContinue && latestIsPresentRef.current) {
            setTimeout(() => skipToNextPanel(), AUTO_CONTINUE_TIMEOUT)
          }
        })
        return controls.stop
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPresent],
  )

  // Animate on exit
  React.useLayoutEffect(() => {
    if (!isPresent) {
      controls
        .start({
          opacity: 0,
          transition: {duration: EXIT_DURATION / 1000, ease: 'easeOut'},
        })
        .then(() => safeToRemove?.())
      return controls.stop
    }
  }, [controls, isPresent, safeToRemove])

  return controls
}

const AUTO_CONTINUE_TIMEOUT = 4000
const EXIT_DURATION = 500
