import {useMeasure} from '@react-hookz/web'
import type {HTMLMotionProps} from 'framer-motion'
import React from 'react'
import ReactRough, {Rectangle} from 'react-rough'
import {twMerge} from 'tailwind-merge'
import {Reveal} from '~/lib/components'

export interface CardProps extends HTMLMotionProps<'div'> {
  contentClassName?: string
}

export const Card = React.forwardRef(function Card(
  {children, className, contentClassName, ...restProps}: CardProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Reveal
      ref={forwardedRef}
      className={twMerge('relative shadow-lg', className)}
      {...restProps}>
      <CardBackground />
      <article
        className={twMerge(
          'prose relative z-10 p-8 font-mono',
          contentClassName,
        )}>
        {children}
      </article>
    </Reveal>
  )
})

function CardBackground() {
  const [containerRect, containerRef] = useMeasure<HTMLDivElement>()
  return (
    <div className="absolute inset-0" ref={containerRef}>
      {containerRect && (
        // @ts-ignore
        <ReactRough
          width={containerRect.width}
          height={containerRect.height}
          renderer="svg">
          <Rectangle
            x={0}
            y={0}
            width={containerRect.width}
            height={containerRect.height}
            fill="#F7F4DC"
            fillStyle="solid"
            strokeWidth={2}
            roughness={2}
          />
        </ReactRough>
      )}
    </div>
  )
}
