'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

const restrictedGlobals = [
  {
    name: 'isFinite',
    message: 'Use `Number.isFinite()` instead. (https://github.com/airbnb/javascript#standard-library--isfinite)',
  },
  {
    name: 'isNaN',
    message: 'Use `Number.isNaN()` instead. (https://github.com/airbnb/javascript#standard-library--isnan)',
  },
  'parseInt',
  'parseFloat',
].concat(confusingBrowserGlobals);

/**
 * with `no-restricted-globals` + `no-restricted-properties` rules
 */
module.exports = {
  rules: {
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-restricted-properties': [
      'error',
      {
        object: 'global',
        property: 'isFinite',
        message: 'Use `Number.isFinite()` instead.',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Use `Number.isFinite()` instead.',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Use `Number.isFinite()` instead.',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Use `Number.isNaN()` instead.',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Use `Number.isNaN()` instead.',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Use `Number.isNaN()` instead.',
      },
      {
        object: 'global',
        property: 'parseInt',
        message: 'Use `Number.parseInt()` instead.',
      },
      {
        object: 'self',
        property: 'parseInt',
        message: 'Use `Number.parseInt()` instead.',
      },
      {
        object: 'window',
        property: 'parseInt',
        message: 'Use `Number.parseInt()` instead.',
      },
      {
        object: 'global',
        property: 'parseFloat',
        message: 'Use `Number.parseFloat()` instead.',
      },
      {
        object: 'self',
        property: 'parseFloat',
        message: 'Use `Number.parseFloat()` instead.',
      },
      {
        object: 'window',
        property: 'parseFloat',
        message: 'Use `Number.parseFloat()` instead.',
      },
      {
        property: '__defineGetter__',
        message: 'Use `Object.defineProperty()` instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Use `Object.defineProperty()` instead.',
      },
    ],
  },
};
