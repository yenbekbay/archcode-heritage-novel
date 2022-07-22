import Image from 'next/future/image'
import React from 'react'
import {fenceBottomPng, fenceMiddlePng, fenceTopPng} from '~/assets/www'
import {Reveal} from '~/lib/components'

export interface FenceSectionProps {
  children: React.ReactNode
}

export function FenceSection({children}: FenceSectionProps) {
  return (
    <section className="relative flex flex-col pt-28 pb-[26rem]">
      <Reveal className="absolute inset-0 -ml-[10%] flex w-[120%] flex-col">
        <Image src={fenceTopPng} />
        <div
          className="flex-1 bg-[length:100%_auto] bg-[center_top] bg-repeat-y"
          style={{backgroundImage: `url(${fenceMiddlePng.src})`}}
        />
        <Image className="-mb-4" src={fenceBottomPng} />
      </Reveal>

      {children}
    </section>
  )
}
