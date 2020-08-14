module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': 'off',
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-continue': 'off',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'no-console': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 0,
    'no-else-return': ['error', { allowElseIf: true }],
    'class-methods-use-this': 'off',
    'prefer-object-spread': 'off',
    'max-classes-per-file': ['error', 10],
    'prefer-destructuring': ['error', { object: false, array: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/destructuring-assignment': ['off', 'always'],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false }
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always']
  },
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import']
};
