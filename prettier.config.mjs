/** @type {import('prettier').Config & {tailwindFunctions?: string[]}} */
const config = {
  bracketSpacing: false,
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  tailwindFunctions: ['twMerge'],
  plugins: [
    '@utilfirst/prettier-plugin',
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-sh',
    'prettier-plugin-sort-json',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: ['.env', '.env.*'],
      options: {parser: 'sh'},
    },
  ],
}

export default config
