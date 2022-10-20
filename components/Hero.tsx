import {Reveal} from 'lib/components'
import React from 'react'
import {twMerge} from 'tailwind-merge'

export interface HeroProps extends React.ComponentPropsWithoutRef<'section'> {
  title: string
  image?: React.ReactNode
  children?: React.ReactNode
}

export function Hero({
  title,
  image,
  children,
  className,
  ...restProps
}: HeroProps) {
  return (
    <Reveal asChild>
      <div
        className={twMerge(
          'container mx-auto grid grid-flow-row gap-8 p-8 pb-16 lg:grid-flow-col lg:justify-items-start',
          className,
        )}
        {...restProps}
      >
        <div className="prose-invert prose flex flex-col space-y-4 prose-p:font-medium">
          <h1 className="mb-2 font-display text-7xl leading-[0.8] lg:text-9xl lg:leading-[0.8]">
            {title}
          </h1>

          {children}
        </div>

        {image}
      </div>
    </Reveal>
  )
}
