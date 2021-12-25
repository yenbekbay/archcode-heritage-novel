import {useRegisterPanel} from '../components/PanelContext'
import {motion, useAnimation, usePresence} from 'framer-motion'
import React from 'react'
import {Flex} from '~/styles/Flex'
import {Text} from '~/styles/Text'

export interface TitleProps {
  children: string
}

export function Title({children}: TitleProps) {
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
  React.useEffect(
    () => {
      if (isPresent) {
        controls.start({opacity: 1, transition: {duration: 4}})
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
    <Flex css={{flex: 1, padding: '$4'}} direction="column" justify="center">
      <Text
        as={motion.span}
        css={{
          textAlign: 'center',
          color: '$red10',
          fontFamily: '$calligraph',
          fontWeight: 700,
          lineHeight: 1,
        }}
        size="7"
        initial={{opacity: 0}}
        animate={controls}>
        {children}
      </Text>
    </Flex>
  )
}
