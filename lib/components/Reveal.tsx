import {Slot} from '@radix-ui/react-slot'
import type {HTMLMotionProps} from 'framer-motion'
import {motion, useAnimation, useInView} from 'framer-motion'
import React from 'react'
import {mergeRefs} from 'react-merge-refs'

export interface RevealProps extends HTMLMotionProps<'div'> {
  asChild?: boolean
}

export const Reveal = React.forwardRef(function Reveal(
  {asChild, ...restProps}: RevealProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const internalRef = React.useRef<HTMLElement>(null)
  const inView = useInView(internalRef, {once: true})
  const animation = useAnimation()
  React.useEffect(() => {
    if (inView) {
      void animation.start('visible')
    }
  }, [animation, inView])
  const Comp = asChild ? Slot : 'div'
  const MotionComp = React.useMemo(
    () =>
      motion(Comp) as React.ComponentType<
        HTMLMotionProps<'div'> & {ref?: React.Ref<HTMLDivElement>}
      >,
    [Comp],
  )
  return (
    <MotionComp
      ref={mergeRefs([internalRef, forwardedRef])}
      animate={animation}
      variants={variants}
      initial="hidden"
      {...restProps}
    />
  )
})

const variants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
}
