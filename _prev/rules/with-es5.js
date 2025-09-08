'use strict';

/**
 * With ECMAScript 5 rules
 */
module.exports = {
  env: {
    // For backward compatibility.
    es6: false,
    es2023: false,
  },
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  rules: {
    // Disable all conflicting rules.
    'no-var': 'off',
    'prefer-numeric-literals': 'off',

    // Enable strict mode as we cannot assure the strict mode is enabled for non-ESM sources.
    'strict': 'error',
  },
};
