module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "array-bracket-spacing": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-multi-spaces": "error",
    "no-unused-vars": ["warn"],
    "no-console": 0,
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "quotes": ["error", "single"],
    "react/jsx-filename-extension": "error",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "semi": ["warn", "always"],
    "space-before-function-paren": ["error",{
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "spaced-comment": "error",
  },
};
