'use strict';

/**
 * with simple import rules
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],
  },
};
