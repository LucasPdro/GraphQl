export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        node: true,
        browser: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
