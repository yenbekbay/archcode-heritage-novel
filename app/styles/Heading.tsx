import {Text} from './Text'
import React from 'react'
import {merge} from 'remeda'
import {CSS, VariantProps} from '~/stitches.config'

const DEFAULT_TAG = 'h1'

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type HeadingSizeVariants = '1' | '2' | '3' | '4'
type HeadingVariants = {size?: HeadingSizeVariants} & Omit<
  VariantProps<typeof Text>,
  'size'
>
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & {css?: CSS; as?: any}

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>(({size = '1', ...textProps}, forwardedRef) => {
  const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
    1: {'@initial': '4', '@bp2': '5'},
    2: {'@initial': '5', '@bp2': '6'},
    3: {'@initial': '6', '@bp2': '7'},
    4: {'@initial': '7', '@bp2': '8'},
  }
  return (
    <Text
      {...textProps}
      as={DEFAULT_TAG}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontVariantNumeric: 'proportional-nums',
        fontWeight: 600,
        lineHeight: '1.2em',
        ...textProps.css,
      }}
    />
  )
})
