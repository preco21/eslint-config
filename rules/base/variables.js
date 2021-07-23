'use strict';

/**
 * variables
 * https://eslint.org/docs/rules/#variables
 */
module.exports = {
  rules: {
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    // enabled by `with-no-restricted` rules
    'no-restricted-globals': 'off',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true,
    }],
    'no-use-before-define': ['error', {
      functions: false,
      variables: false,
    }],
  },
};
