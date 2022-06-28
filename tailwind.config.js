const defaultColors = require('tailwindcss/colors')

const colors = {
  ...defaultColors,
  chicago: {
    DEFAULT: '#88867B',
    50: '#DFDEDB',
    100: '#D5D5D1',
    200: '#C2C1BB',
    300: '#AEADA6',
    400: '#9B9A90',
    500: '#88867B',
    600: '#727167',
    700: '#5D5C54',
    800: '#403F39',
    900: '#22221F',
  },
  crail: {
    DEFAULT: '#C1673F',
    50: '#EED5CA',
    100: '#E9C9BA',
    200: '#DFB09C',
    300: '#D5987D',
    400: '#CB7F5E',
    500: '#C1673F',
    600: '#975031',
    700: '#6D3A23',
    800: '#422315',
    900: '#180D08',
  },
  'rum-swizzle': {
    DEFAULT: '#C1B12C',
    50: '#F7F4DC',
    100: '#F2EDC7',
    200: '#E9E09E',
    300: '#DFD374',
    400: '#D6C64B',
    500: '#C1B12C',
    600: '#988B23',
    700: '#6E6519',
    800: '#453F10',
    900: '#1B1906',
  },
}

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors,
    extend: {
      colors: {
        content: colors.chicago[700],
        'content-focus': colors.chicago[800],
        'content-invert': colors['rum-swizzle'][50],
        'content-invert-focus': colors['rum-swizzle'][100],
      },
      fontFamily: {
        display: ['Moniqa'],
        calligraph: ['calligraph'],
      },
      keyframes: {
        'slide-up': {
          '0%': {opacity: 0, transform: 'translateY(10px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
        'bounce-gentle': {
          '0%, 100%': {transform: 'translateY(-5%)'},
          '50%': {transform: 'translateY(0)'},
        },
      },
      animation: {
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-gentle': 'bounce-gentle 1s infinite ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-radix')(),
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          primary: colors.crail[500],
          'primary-content': colors.white,
          secondary: colors.chicago[500],
          'secondary-content': colors.white,
          accent: colors.chicago[500],
          'accent-content': colors.white,
          neutral: colors.chicago[500],
          'neutral-content': colors.white,
          'base-100': colors.white,
          'base-200': colors.chicago[50],
          'base-300': colors.chicago[100],
          'base-content': colors.chicago[700],
          info: colors.blue[500],
          success: colors.green[500],
          warning: colors.yellow[500],
          error: colors.red[500],

          '--rounded-box': '0.4rem',
          '--rounded-btn': '0.4rem',
          '--rounded-badge': '0.4rem',
          '--tab-radius': '0.4rem',
        },
      },
    ],
    darkTheme: 'light',
  },
}
