import {useMeasure} from '@react-hookz/web'
import clsx from 'clsx'
import type {HTMLMotionProps} from 'framer-motion'
import React from 'react'
import ReactRough, {Rectangle} from 'react-rough'
import {Reveal} from '~/lib/components'

export interface CardProps extends HTMLMotionProps<'div'> {}

export const Card = React.forwardRef(function Card(
  {children, className, ...restProps}: CardProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Reveal
      ref={forwardedRef}
      className={clsx('relative shadow-lg', className)}
      {...restProps}>
      <CardBackground />
      <article className="prose relative z-10 p-8 font-mono">
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
