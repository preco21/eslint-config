'use strict';

module.exports = {
  extends: [
    './react',
  ].map(require.resolve),
  settings: {
    'import/core-modules': ['resolveAssetSource'],
  },
  // stolen from https://github.com/expo/eslint-config-universe/blob/524f88445a28f84f87bf768464b8cb833c622fff/native.js
  globals: {
    __DEV__: false,
    Atomics: false,
    ErrorUtils: false,
    FormData: false,
    SharedArrayBuffer: false,
    XMLHttpRequest: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: false,
    clearInterval: false,
    clearTimeout: false,
    fetch: false,
    navigator: false,
    process: false,
    requestAnimationFrame: false,
    requestIdleCallback: false,
    setImmediate: false,
    setInterval: false,
    setTimeout: false,
    window: false,
  },
};
