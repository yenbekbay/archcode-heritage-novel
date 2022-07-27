import {useMeasure} from '@react-hookz/web'
import type {HTMLMotionProps} from 'framer-motion'
import React from 'react'
import ReactRough, {Rectangle} from 'react-rough'
import {twMerge} from 'tailwind-merge'
import {Reveal} from 'lib/components'

export interface RoughCardProps extends HTMLMotionProps<'div'> {
  contentClassName?: string
}

export const RoughCard = React.forwardRef(function Card(
  {children, className, contentClassName, ...restProps}: RoughCardProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Reveal
      ref={forwardedRef}
      className={twMerge('relative shadow-lg', className)}
      {...restProps}>
      <RoughCardBackground />
      <article
        className={twMerge(
          'prose relative z-10 overflow-hidden p-8 font-mono',
          contentClassName,
        )}>
        {children}
      </article>
    </Reveal>
  )
})

function RoughCardBackground() {
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
