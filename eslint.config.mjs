import eslint from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import pluginUtilfirst from '@utilfirst/eslint-plugin'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import {defineConfig} from 'eslint/config'
// @ts-expect-error eslint-plugin-promise does not ship types
import pluginPromise from 'eslint-plugin-promise'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
// @ts-expect-error eslint-plugin-tailwindcss does not ship types
import pluginTailwind from 'eslint-plugin-tailwindcss'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  pluginJsxA11y.flatConfigs.recommended,
  pluginPromise.configs['flat/recommended'],
  pluginNext.configs['core-web-vitals'],
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs.flat.recommended,
  pluginUtilfirst.configs.recommended,
  pluginTailwind.configs['flat/recommended'],
  {
    ignores: [
      '.env',
      '.env*.local',
      '.next/**',
      '.tmp/**',
      '.vercel/**',
      '__generated__/**',
      'next-env.d.ts',
      'node_modules/**',
      'pnpm-lock.yaml',
    ],
  },
  {
    languageOptions: {
      globals: globals['shared-node-browser'],
      parserOptions: {
        projectService: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
    settings: {
      react: {
        version: '18',
      },
      tailwindcss: {
        callees: ['twMerge'],
        config: 'tailwind.config.mjs',
        cssFiles: ['main.css'],
        whitelist: ['rvn-.*'],
      },
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {prefer: 'type-imports', fixStyle: 'inline-type-imports'},
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'brace-style': 'error',
      'curly': 'error',
      'jsx-a11y/no-autofocus': 'off',
      'object-shorthand': 'error',
      'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
      'quotes': ['error', 'single', {avoidEscape: true}],
      'react/function-component-definition': 'error',
      'react/hook-use-state': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/no-custom-classname': 'error',
      'utilfirst/consistent-blank-lines': 'off',
    },
  },
  {
    files: ['**/*.{js,cjs,mjs}'],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: [
      'game/commands/SubmitMeme.tsx',
      'game/commands/internal/TextForm.tsx',
    ],
    rules: {
      // NOTE: `react-zorm` exposes render-safe form helpers through a ref-shaped API.
      'react-hooks/refs': 'off',
    },
  },
  {
    files: ['game/MyGame.tsx'],
    rules: {
      // NOTE: The visual-novel package exposes `Branches` through declaration merging.
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  {
    files: ['game/sounds.ts'],
    rules: {
      // NOTE: ZzFX uses sparse positional arrays as its encoded sound format.
      'no-sparse-arrays': 'off',
    },
  },
])
