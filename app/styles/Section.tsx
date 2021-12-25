import {styled} from '~/stitches.config'

export const Section = styled('section', {
  flexShrink: 0,

  variants: {
    size: {
      '1': {
        py: '$3',
      },
      '2': {
        py: '$4',
      },
      '3': {
        py: '$5',
      },
    },
  },
  defaultVariants: {
    size: '3',
  },
})
