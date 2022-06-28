import clsx from 'clsx'
import React from 'react'
import {fencePng} from '~/assets/www'

export interface FenceSectionProps
  extends React.ComponentPropsWithoutRef<'div'> {}

export function FenceSection({
  children,
  className,
  ...restProps
}: FenceSectionProps) {
  return (
    <div
      className={clsx(
        'relative mt-16 flex flex-col overflow-hidden py-28',
        className,
      )}
      {...restProps}>
      <img
        className="absolute inset-0 -z-10 -ml-[10%] w-[120%] max-w-none object-cover"
        src={fencePng}
      />

      {children}
    </div>
  )
}
