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
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-console": 0,
    "no-var": "error",
    "react/jsx-filename-extension": "error",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
  },
};
