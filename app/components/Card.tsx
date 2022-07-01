import {useMeasure} from '@react-hookz/web'
import clsx from 'clsx'
import React from 'react'
import ReactRough, {Rectangle} from 'react-rough'

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Card = React.forwardRef(function Card(
  {children, className, ...restProps}: CardProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={forwardedRef}
      className={clsx('relative', className)}
      {...restProps}>
      <CardBackground />
      <article className="prose relative z-10 p-8 font-mono">
        {children}
      </article>
    </div>
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
            roughness={4}
          />
        </ReactRough>
      )}
    </div>
  )
}
