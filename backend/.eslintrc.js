module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'eslint-plugin-import-helpers',
    '@typescript-eslint'
  ],
  rules: {
    'no-unused-vars': 'off',
    camelcase: 'off',
    'import-helpers/order-imports': [
      'warn',
      { // example configuration
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
}
