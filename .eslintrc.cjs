module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  ignorePatterns: ['vite.config.ts'],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'consistent-return': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/no-unstable-nested-components': [2, { allowAsProps: true }],
    'react/no-array-index-key': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    'import/no-extraneous-dependencies': [0, { devDependencies: true }],
    'import/order': 0,
    'simple-import-sort/exports': 1,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // react
          ['react'],
          // External packages.
          ['^'],
          // Internal packages.
          ['^@'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$']
        ]
      }
    ]
  }
};
