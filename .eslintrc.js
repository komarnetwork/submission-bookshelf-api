module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['**/node_modules/*', '**/public/*'],
  rules: {
    eqeqeq: 'off',
    indent: [2, 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    camelcase: ['error'],
    'no-undef': ['error'],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'arrow-body-style': 'off',
  },
};
