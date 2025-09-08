'use strict';

/**
 * Possible Problems
 * https://eslint.org/docs/latest/rules/#possible-problems
 */
module.exports = {
  rules: {
    'array-callback-return': 'error',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    // You may need to use `await` in loops for various purposes such as
    // indefinite iteration, retrying (e.g., exponential backoff), throttling,
    // and running a series of workflow jobs sequentially.
    'no-await-in-loop': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    // Use `for (;;) {}` for infinite loop
    'no-constant-condition': 'warn',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'warn',
    'no-misleading-character-class': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    // This rule is disabled for situations where you may encounter edge cases while using `setTimeout()`, such as:
    // await new Promise((resolve) => setTimeout(resolve, 300));
    'no-promise-executor-return': 'off',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true,
    }],
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'no-useless-backreference': 'error',
    // FIXME: Enable once this issue is resolved: https://github.com/eslint/eslint/issues/11899
    'require-atomic-updates': 'off',
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
