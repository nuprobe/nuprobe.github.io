module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 0,
    'linebreak-style': 0,
    'indent': ['error', 2],
    'import/extensions': ['error', 'always', {
      js: '0',
      vue: '0'
    }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/prefer-default-export": 0,
    'no-bitwise': ["error", { "allow": ["~"] }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
