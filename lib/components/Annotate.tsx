import {Slot} from '@radix-ui/react-slot'
import React from 'react'
import {useInView} from 'framer-motion'
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
  const internalRef = React.useRef<HTMLElement>(null)
  const inView = useInView(internalRef, {once: true})
  const Comp = asChild ? Slot : 'span'
  React.useEffect(
    () => {
      setTimeout(() => {
        if (inView && internalRef.current) {
          const annotation = annotate(internalRef.current, {
            color: '#C1B12C',
            type: 'underline',
            ...config,
          })
          annotation.show()
        }
      }, SHOW_DELAY_MS)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inView],
  )
  return <Comp ref={mergeRefs([internalRef, forwardedRef])} {...restProps} />
})

const SHOW_DELAY_MS = 1000
