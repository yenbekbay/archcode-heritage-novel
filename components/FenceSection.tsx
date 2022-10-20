import {fenceBottomPng, fenceMiddlePng, fenceTopPng} from 'assets/www'
import Image from 'next/future/image'
import React from 'react'

export interface FenceSectionProps {
  children: React.ReactNode
}

export function FenceSection({children}: FenceSectionProps) {
  return (
    <section className="relative flex flex-col pt-28 pb-[26rem]">
      <div className="absolute inset-0 ml-[-10%] flex w-[120%] flex-col">
        <Image src={fenceTopPng} alt="" priority className="w-full" />
        <div
          className="flex-1 bg-[length:100%_auto] bg-[center_top] bg-repeat-y"
          style={{backgroundImage: `url(${fenceMiddlePng.src})`}}
        />
        <Image src={fenceBottomPng} alt="" priority className="-mb-4 w-full" />
      </div>

      {children}
    </section>
  )
}
