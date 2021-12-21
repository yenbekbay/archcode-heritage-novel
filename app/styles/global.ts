import {globalCss} from '~/stitches.config'

export const globalStyles = globalCss({
  body: {
    backgroundColor: '$white',
    color: '$black',
    fontFamily: '$sans',
  },

  '::selection': {
    backgroundColor: 'hsla(52, 100%, 49%, 0.99)',
    color: '$black',
  },
})
