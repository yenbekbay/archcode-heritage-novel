import {styled} from '../stitches.config'

export const IconButton = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: 0,
  outline: 'none',
  padding: 0,
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',

  backgroundColor: '$loContrast',
  border: '1px solid $slate7',
  borderRadius: '$round',
  borderWidth: 0,
  color: '$hiContrast',
  fontFamily: '$sans',
  fontSize: '$2',
  width: '$4',
  height: '$4',
  '@hover': {
    '&:hover': {
      borderColor: '$slate8',
    },
  },
  '&:active': {
    backgroundColor: '$slate2',
  },
  '&:focus': {
    borderColor: '$slate8',
    boxShadow: '0 0 0 1px $colors$slate8',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '$slate6',
  },

  variants: {
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3',
          },
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
        },
        '&:active': {
          backgroundColor: '$slateA4',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slateA4',
          },
      },
      raised: {
        borderColor: 'transparent',
        boxShadow:
          '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        '@hover': {
          '&:hover': {
            boxShadow:
              '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
          },
        },
        '&:focus': {
          borderColor: '$slate8',
          boxShadow:
            '0 0 0 1px $colors$slate8, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },
      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'ghost',
  },
})
