'use strict';

/**
 * strict mode
 * https://eslint.org/docs/rules/#strict-mode
 */
module.exports = {
  rules: {
    // this rule is intentionally turned off: since use of modern ECMAScript
    // modules or tools like Babel automatically assumes environments to be
    // `strict-mode` enabled, we don't need to force users to have a strict mode
    // flag in every entry of their code.
    'strict': 'off',
  },
};
