import {motion, useAnimation} from 'framer-motion'
import React from 'react'
import {Text} from '~/styles/Text'

export interface AnimatedTextInstance {
  cancel: () => void
}

export interface AnimatedTextProps
  extends React.ComponentPropsWithoutRef<typeof Text> {
  textRef?: React.Ref<HTMLSpanElement>
  children: string
}

export const AnimatedText = React.forwardRef(
  (
    {children, textRef, ...restProps}: AnimatedTextProps,
    forwardedRef: React.ForwardedRef<AnimatedTextInstance>,
  ) => {
    const controls = useAnimation()
    React.useImperativeHandle(
      forwardedRef,
      (): AnimatedTextInstance => ({
        cancel: () => {
          controls.stop()
          controls.set({opacity: 1})
        },
      }),
      [],
    )

    // Animate on mount
    React.useEffect(() => {
      controls.start((idx) => ({
        opacity: 1,
        transition: {delay: 0.04 * idx},
      }))
      return controls.stop
    }, [])

    return (
      <Text ref={textRef} {...restProps}>
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
    )
  },
)
