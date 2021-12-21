import {styled} from '~/stitches.config'

export const Container = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,

  ml: 'auto',
  mr: 'auto',
  px: '$4',

  variants: {
    size: {
      '1': {
        maxWidth: '540px',
      },
      '2': {
        maxWidth: '720px',
      },
      '3': {
        maxWidth: '1140px',
      },
    },
  },
  defaultVariants: {
    size: '3',
  },
})
