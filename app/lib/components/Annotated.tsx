import {Slot} from '@radix-ui/react-slot'
import React from 'react'
import {useInView} from 'react-intersection-observer'
import {mergeRefs} from 'react-merge-refs'
import {annotate} from 'rough-notation'
import type {RoughAnnotationConfig} from 'rough-notation/lib/model'

export interface AnnotatedProps extends React.ComponentPropsWithoutRef<'span'> {
  asChild?: boolean
  config?: RoughAnnotationConfig
}

export function Annotated({asChild, config, ...restProps}: AnnotatedProps) {
  const {ref: observerRef, inView} = useInView()
  const ownRef = React.useRef<HTMLElement>(null)
  const annotatedRef = React.useRef(false)
  const Comp = asChild ? Slot : 'span'
  React.useEffect(
    () => {
      if (inView && ownRef.current && !annotatedRef.current) {
        const annotation = annotate(ownRef.current, {
          color: '#C1B12C',
          type: 'underline',
          ...config,
        })
        annotation.show()
        annotatedRef.current = true
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inView],
  )
  return <Comp ref={mergeRefs([observerRef, ownRef])} {...restProps} />
}
