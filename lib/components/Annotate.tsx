import {Slot} from '@radix-ui/react-slot'
import React from 'react'
import {useInView} from 'react-intersection-observer'
import {mergeRefs} from 'react-merge-refs'
import {annotate} from 'rough-notation'
import type {RoughAnnotationConfig} from 'rough-notation/lib/model'

export interface AnnotateProps extends React.ComponentPropsWithoutRef<'span'> {
  asChild?: boolean
  config?: RoughAnnotationConfig
}

export const Annotate = React.forwardRef(function Annotate(
  {asChild, config, ...restProps}: AnnotateProps,
  forwardedRef: React.ForwardedRef<HTMLSpanElement>,
) {
  const {ref: observerRef, inView} = useInView({triggerOnce: true})
  const internalRef = React.useRef<HTMLElement>(null)
  const Comp = asChild ? Slot : 'span'
  React.useEffect(
    () => {
      if (inView && internalRef.current) {
        const annotation = annotate(internalRef.current, {
          color: '#C1B12C',
          type: 'underline',
          ...config,
        })
        annotation.show()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inView],
  )
  return (
    <Comp
      ref={mergeRefs([observerRef, internalRef, forwardedRef])}
      {...restProps}
    />
  )
})
