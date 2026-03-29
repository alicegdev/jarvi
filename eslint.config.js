// eslint.config.js
export default [
  {
    ignores: ['node_modules/'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      semi: 'error',
    },
  },
];   