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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
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
          'base-100': '#ffffff',
          'base-200': '#f2f2f2',
          'base-300': '#e5e6e6',

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
