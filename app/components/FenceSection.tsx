import React from 'react'
import {fenceBottomPng, fenceMiddlePng, fenceTopPng} from '~/assets/www'

export interface FenceSectionProps {
  children: React.ReactNode
}

export function FenceSection({children}: FenceSectionProps) {
  return (
    <div className="relative mt-16 flex flex-col overflow-hidden pt-28 pb-[26rem]">
      <div className="absolute inset-0 -ml-[10%] flex w-[120%] flex-col">
        <img src={fenceTopPng} />
        <div
          className="flex-1 bg-cover bg-[center_top] bg-repeat-y"
          style={{backgroundImage: `url(${fenceMiddlePng})`}}
        />
        <img className="-mb-4" src={fenceBottomPng} />
      </div>

      {children}
    </div>
  )
}
