import React from 'react'

export interface HeroProps {
  title: string
  children: React.ReactNode
}

export function Hero({title, children}: HeroProps) {
  return (
    <div className="container mx-auto p-8 text-content-invert">
      <div className="prose flex flex-col space-y-4">
        <h1 className="mb-2 text-5xl lg:text-6xl">{title}</h1>

        {children}
      </div>
    </div>
  )
}
