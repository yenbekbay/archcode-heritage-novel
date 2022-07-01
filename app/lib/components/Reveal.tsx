import {Slot} from '@radix-ui/react-slot'
import type {HTMLMotionProps} from 'framer-motion'
import {motion, useAnimation} from 'framer-motion'
import React from 'react'
import {useInView} from 'react-intersection-observer'
import {mergeRefs} from 'react-merge-refs'

export interface RevealProps extends HTMLMotionProps<'div'> {
  asChild?: boolean
}

export const Reveal = React.forwardRef(function Reveal(
  {asChild, ...restProps}: RevealProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const {ref: observerRef, inView} = useInView({triggerOnce: true})
  const Comp = asChild ? Slot : 'div'
  const MotionComp = React.useMemo(
    () =>
      motion(Comp) as React.ComponentType<
        HTMLMotionProps<'div'> & {ref?: React.Ref<HTMLDivElement>}
      >,
    [Comp],
  )
  const animation = useAnimation()
  React.useEffect(
    () => {
      if (inView) {
        animation.start('visible')
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inView],
  )
  return (
    <MotionComp
      ref={mergeRefs([observerRef, forwardedRef])}
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
