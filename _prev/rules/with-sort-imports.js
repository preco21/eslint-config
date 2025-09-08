'use strict';

/**
 * With simple import rules
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],
  },
};
