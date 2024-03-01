'use strict';

module.exports = {
  env: {
    // Allow all ECMAScript 2023 globals including ES2015(ES6)+.
    // https://github.com/eslint/eslintrc/blob/289653be93bb3c0768d9a2d1b3f039b900c44e45/conf/environments.js#L117-L122
    'es2023': true,
    // Allow common web globals available in modern environments such as Node.js v18+, Deno and Bun.
    // https://github.com/sindresorhus/globals/blob/64d801f42fd9a35617622b1b19010701352efe6d/globals.json#L1720-L1749
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    './possible-errors',
    './best-practices',
    './strict-mode',
    './variables',
    './stylistic-issues',
    './ecmascript-6',
  ].map(require.resolve),
};
