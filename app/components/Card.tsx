import {useMeasure} from '@react-hookz/web'
import clsx from 'clsx'
import React from 'react'
import ReactRough, {Rectangle} from 'react-rough'

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}

export function Card({children, className, ...restProps}: CardProps) {
  return (
    <div className={clsx('relative mx-auto', className)} {...restProps}>
      <CardBackground />

      <article className="prose p-8 font-mono">{children}</article>
    </div>
  )
}

function CardBackground() {
  const [containerRect, containerRef] = useMeasure<HTMLDivElement>()
  return (
    <div className="absolute inset-0 -z-10" ref={containerRef}>
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
