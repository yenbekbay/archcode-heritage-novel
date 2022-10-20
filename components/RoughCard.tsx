import {useMeasure} from '@react-hookz/web'
import type {HTMLMotionProps} from 'framer-motion'
import {Reveal} from 'lib/components'
import React from 'react'
import ReactRough, {Rectangle} from 'react-rough'
import {twMerge} from 'tailwind-merge'

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
      {...restProps}
    >
      <RoughCardBackground />
      <article
        className={twMerge(
          'prose relative z-10 overflow-hidden p-8 font-mono',
          contentClassName,
        )}
      >
        {children}
      </article>
    </Reveal>
  )
})

function RoughCardBackground() {
  const [containerRect, containerRef] = useMeasure<HTMLDivElement>()
  return (
    <div ref={containerRef} className="absolute inset-0">
      {containerRect && (
        // @ts-expect-error
        <ReactRough
          width={containerRect.width}
          height={containerRect.height}
          renderer="svg"
        >
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
