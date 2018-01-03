const ERROR = 2;
const WARN = 1;

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'array-bracket-spacing': [ERROR, 'never'],
    'arrow-parens': [ERROR, 'as-needed', {
      requireForBlockBody: true,
    }],
    'comma-dangle': [ERROR, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline'
    }],
    indent: [ERROR, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement *']
    }],
    'key-spacing': [ERROR, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [ERROR, {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],
    'linebreak-style': [ERROR, 'unix'],
    'no-multi-spaces': ERROR,
    'no-unused-vars': [WARN],
    'no-console': 0,
    'no-path-concat': ERROR,
    'no-var': ERROR,
    'object-curly-spacing': [ERROR, 'always'],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    'prefer-template': ERROR,
    quotes: [ERROR, 'single'],
    'react/jsx-filename-extension': ERROR,
    'react/jsx-uses-react': WARN,
    'react/jsx-uses-vars': WARN,
    semi: [WARN, 'always'],
    'space-before-function-paren': [ERROR,{
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'spaced-comment': ERROR,
  },
};
