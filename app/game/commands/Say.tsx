import {useGoToNext, useRegisterPanel} from '../components/PanelContext'
import {motion, useAnimation, usePresence} from 'framer-motion'
import React from 'react'
import {Flex} from '~/styles/Flex'
import {Text} from '~/styles/Text'

export interface SayProps {
  children: string
  continue?: boolean
}

export function Say({children, continue: shouldContinue}: SayProps) {
  const controls = useAnimation()
  const skippedRef = React.useRef(false)
  const [isPresent, safeToRemove] = usePresence()
  const goToNext = useGoToNext()

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
  React.useEffect(
    () => {
      if (isPresent) {
        controls
          .start((idx) => ({
            opacity: 1,
            transition: {delay: 0.5 + 0.02 * idx},
          }))
          .then(() => {
            if (shouldContinue) {
              setTimeout(() => goToNext(), AUTO_CONTINUE_TIMEOUT)
            }
          })
        return controls.stop
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPresent],
  )

  // Animate on exit
  React.useEffect(() => {
    if (!isPresent) {
      controls
        .start({opacity: 0, transition: {duration: 0.5, ease: 'easeOut'}})
        .then(() => safeToRemove?.())
      return controls.stop
    }
  }, [controls, isPresent, safeToRemove])

  return (
    <Flex css={{flex: 1, padding: '$4'}} direction="column">
      <Text css={{textAlign: 'center', fontFamily: '$calligraph'}}>
        {children.split('').map((char, idx) => (
          <motion.span
            key={`${char}_${idx}`}
            initial={{opacity: 0}}
            animate={controls}
            custom={idx}>
            {char}
          </motion.span>
        ))}
      </Text>
    </Flex>
  )
}

const AUTO_CONTINUE_TIMEOUT = 4000
