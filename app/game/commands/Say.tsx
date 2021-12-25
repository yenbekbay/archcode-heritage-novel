import {useRegisterPanel} from '../components/PanelContext'
import {motion, useAnimation, usePresence} from 'framer-motion'
import React from 'react'
import {Flex} from '~/styles/Flex'
import {Text} from '~/styles/Text'

export interface SayProps {
  children: string
}

export function Say({children}: SayProps) {
  const controls = useAnimation()
  const skippedRef = React.useRef(false)
  const [isPresent, safeToRemove] = usePresence()

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
  React.useEffect(() => {
    controls.start((idx) => ({
      opacity: 1,
      transition: {delay: 0.5 + 0.02 * idx},
    }))
    return controls.stop
  }, [controls])

  // Animate on exit
  React.useEffect(() => {
    if (!isPresent) {
      controls
        .start({opacity: 0, transition: {duration: 0.5, ease: 'easeOut'}})
        .then(() => safeToRemove?.())
    }
  }, [controls, isPresent, safeToRemove])

  return (
    <Flex css={{flex: 1, padding: '$4'}} direction="column">
      <Text css={{textAlign: 'center'}}>
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
