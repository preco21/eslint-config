'use strict';

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    './rules/base',
    './rules/with-sort-imports',
  ].map(require.resolve),
};
