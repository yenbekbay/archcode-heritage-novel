const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
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
          primary: '#e8e9e0',
          secondary: '#c3c2c0',
          accent: '#ed5f3e',
          neutral: '#3d4451',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-content': '#3d4451',

          '--rounded-box': '0.4rem',
          '--rounded-btn': '0.4rem',
          '--rounded-badge': '0.4rem',

          '--gradient-start': '#e8e9e0',
          '--gradient-end': '#fef8f6',
        },
      },
    ],
    darkTheme: 'light',
  },
}
