module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['next', 'next/core-web-vitals', 'airbnb', 'airbnb-typescript'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': [1, {
      exceptions: ['Component'],
    }],
    'jsx-a11y/label-has-associated-control': [2, {
      assert: 'either',
    }],
    '@typescript-eslint/semi': 'off',
  },
};
