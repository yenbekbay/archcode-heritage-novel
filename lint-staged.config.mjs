/** @type {import('lint-staged').Configuration} */
export default {
  '*': 'prettier --ignore-unknown --write',
  '*.{js,cjs,mjs,ts,tsx}': 'eslint --fix',
}
