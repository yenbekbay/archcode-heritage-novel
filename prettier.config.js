/**
 * @type {import('prettier').Config}
 */
module.exports = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: false,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^(api|assets|components|game|lib)',
    '^[./]',
  ],
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: false,
  plugins: [
    require('@trivago/prettier-plugin-sort-imports'),
    require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-packagejson'),
  ],
  printWidth: 80,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}
