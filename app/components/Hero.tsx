import clsx from 'clsx'
import React from 'react'
import {Reveal} from '~/lib/components'

export interface HeroProps extends React.ComponentPropsWithoutRef<'section'> {
  title: string
  image?: string | null
  children: React.ReactNode
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
      <section
        className={clsx(
          'container mx-auto grid grid-flow-row justify-items-center gap-8 p-8 pb-16 lg:grid-flow-col lg:justify-items-start',
          className,
        )}
        {...restProps}>
        <div className="prose prose-invert flex flex-col space-y-4">
          <h1 className="mb-2 font-display text-7xl leading-[0.8] lg:text-9xl lg:leading-[0.8]">
            {title}
          </h1>

          {children}
        </div>

        {image && <img className="max-h-[36rem]" src={image} />}
      </section>
    </Reveal>
  )
}
