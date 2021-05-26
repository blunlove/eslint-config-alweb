const rules = require('./rules');

module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    amd: true,
    es6: true,
    mocha: false,
    jasmine: false
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: rules
};
