'use strict';

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: [
    './rules/base',
    './rules/with-sort-imports',
    './rules/typescript',
  ].map(require.resolve),
};
