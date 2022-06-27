import React from 'react'

export interface HeroProps {
  title: string
  children: React.ReactNode
}

export function Hero({title, children}: HeroProps) {
  return (
    <div className="container mx-auto p-8 text-content-invert">
      <div className="prose flex flex-col space-y-4">
        <h1 className="mb-2 font-display text-7xl leading-[0.8] lg:text-9xl lg:leading-[0.8]">
          {title}
        </h1>

        {children}
      </div>
    </div>
  )
}
