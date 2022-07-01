import React from 'react'
import {fenceBottomPng, fenceMiddlePng, fenceTopPng} from '~/assets/www'
import {Reveal} from '~/lib/components'

export interface FenceSectionProps {
  children: React.ReactNode
}

export function FenceSection({children}: FenceSectionProps) {
  return (
    <section className="relative flex flex-col pt-28 pb-[26rem]">
      <Reveal className="absolute inset-0 -ml-[10%] w-[120%]">
        <div className="absolute inset-0 -ml-[10%] flex w-[120%] flex-col">
          <img src={fenceTopPng} />
          <div
            className="flex-1 bg-[length:100%_auto] bg-[center_top] bg-repeat-y"
            style={{backgroundImage: `url(${fenceMiddlePng})`}}
          />
          <img className="-mb-4" src={fenceBottomPng} />
        </div>
      </Reveal>

      {children}
    </section>
  )
}
