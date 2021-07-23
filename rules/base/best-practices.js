'use strict';

/**
 * best practices
 * https://eslint.org/docs/rules/#best-practices
 */
module.exports = {
  rules: {
    'accessor-pairs': 'off',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    'complexity': ['warn', { max: 11 }],
    // FIXME:
    // disabled due to the issue where false-positive could occur if used in
    // conjunction with TypeScript.
    // https://github.com/typescript-eslint/typescript-eslint/issues/1277
    'consistent-return': 'off',
    'curly': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'off',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'off',
    'max-classes-per-file': 'off',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-proto': 'error',
    'no-redeclare': 'error',
    // enabled by `with-no-restricted` rules
    'no-restricted-properties': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'warn',
    'no-script-url': 'off',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    // FIXME:
    // may cause false-positive when using optional chaining. but if you are
    // using TypeScript with `typescript-eslint`, it will support it anyway.
    // https://github.com/facebook/create-react-app/issues/8107
    'no-unused-expressions': ['error', {
      allowTaggedTemplates: true,
    }],
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'warn',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-promise-reject-errors': ['error', {
      allowEmptyReject: true,
    }],
    'prefer-regex-literals': ['error', {
      disallowRedundantWrapping: true,
    }],
    'radix': 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'off',
    // `functionPrototypeMethods` is enabled because using such expression
    // without any assignment will end up in a syntax error as it may seem as
    // a function declaration
    'wrap-iife': ['error', 'inside', {
      functionPrototypeMethods: true,
    }],
    'yoda': 'error',
  },
};
