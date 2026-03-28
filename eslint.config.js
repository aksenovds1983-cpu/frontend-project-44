import globals from 'globals'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
  },
]
