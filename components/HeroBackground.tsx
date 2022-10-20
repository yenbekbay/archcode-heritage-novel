import type {StaticImageData} from 'next/future/image'
import React from 'react'
import {ParallaxBanner} from 'react-scroll-parallax'
import {twMerge} from 'tailwind-merge'

export interface HeroBackgroundProps
  extends React.ComponentPropsWithoutRef<'div'> {
  src?: string | StaticImageData
  speed?: number
  containerClassName?: string
}

export function HeroBackground({
  src,
  speed = -16,
  containerClassName,
  className,
  style,
  ...restProps
}: HeroBackgroundProps) {
  return (
    <div className={twMerge('absolute inset-0 -z-10', containerClassName)}>
      <ParallaxBanner
        layers={[
          {
            children: (
              <div
                className={twMerge('h-full w-full', className)}
                style={{
                  backgroundImage: `url(${
                    typeof src === 'object' ? src.src : src
                  })`,
                  ...style,
                }}
                {...restProps}
              />
            ),
            speed,
          },
        ]}
        className="h-full"
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}
