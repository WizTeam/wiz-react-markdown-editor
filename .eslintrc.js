module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  globals: {
    React$Node: true
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
    'react/prop-types': ['off'],
    'react/destructuring-assignment': ['off', 'always'],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, optionalDependencies: false, peerDependencies: false }
    ],
    'import/prefer-default-export': ['off'],
    'no-use-before-define': ['off'],
    'object-curly-newline': [
      'error',
      {
        // "ObjectExpression": "always",
        ObjectPattern: { multiline: true },
        // "ImportDeclaration": "never",
        ExportDeclaration: { multiline: true, minProperties: 6 }
      }
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks']
};
