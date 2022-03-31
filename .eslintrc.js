////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// eslintのルール設定
// ベースとしてはgithubでの引用数が最も多いとされるairbnbを採用
// https://github.com/airbnb/javascript#types
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:compat/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-multi-spaces': [
      "error", { ignoreEOLComments: true },
      "error", { exceptions: { "ImportDeclaration": true } }
    ]
  },
};
