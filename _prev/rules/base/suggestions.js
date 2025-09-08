'use strict';

/**
 * Suggestions
 * https://eslint.org/docs/latest/rules/#suggestions
 */
module.exports = {
  rules: {
    'accessor-pairs': 'off',
    'arrow-body-style': 'off',
    'block-scoped-var': 'error',
    // If you need to use non-camelCase globals, surround them with `eslint-disable` comments.
    'camelcase': ['error', { properties: 'never' }],
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'complexity': 'off',
    // FIXME: Disabled due to the potential for false positives when used alongside TypeScript.
    // See: https://github.com/typescript-eslint/typescript-eslint/issues/1277
    'consistent-return': 'off',
    'consistent-this': 'off',
    'curly': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'off',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'func-name-matching': 'off',
    'func-names': ['warn', 'as-needed'],
    // Prefer function declaration by default; use arrow functions for any other cases.
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'off',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    // FIXME: check
    'logical-assignment-operators': 'off',
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'new-cap': 'off',
    'no-alert': 'warn',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    // FIXME: DEPRECATED
    'no-confusing-arrow': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-continue': 'off',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'off',
    'no-empty': 'error',
    'no-empty-function': 'error',
    // FIXME: check
    'no-empty-static-block': 'off',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    // FIXME: DEPRECATED
    'no-extra-semi': 'error',
    // FIXME: DEPRECATED
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    // FIXME: DEPRECATED
    'no-mixed-operators': 'off',
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
    'no-multi-str': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    // Can be enabled by `with-no-restricted` configuration
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'warn',
    'no-script-url': 'off',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    // Prefer expressions like `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // FIXME: This rule may cause false positives when using optional chaining.
    // However, if you are using TypeScript with `typescript-eslint`, it will
    // support it regardless.
    // See: https://github.com/facebook/create-react-app/issues/8107
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'off',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    // FIXME: DEPRECATED
    // since our `one-var` rule doesn't allow one variable declaration for all,
    // we can safely disable this rule.
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: false }],
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    // FIXME: check
    'prefer-object-has-own': 'off',
    'prefer-object-spread': 'off',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    // FIXME: DEPRECATED
    'quote-props': ['warn', 'as-needed', { unnecessary: false }],
    'radix': 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    // FIXME: DEPRECATED
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        // Space for supporting sprockets directives, slash for TS /// comments.
        markers: ['=', '!', '/'],
      },
      block: {
        exceptions: ['-', '+'],
        // Space for supporting sprockets directives and flow comment types.
        markers: ['=', '!', ':', '::'],
        balanced: true,
      },
    }],
    // This rule has been intentionally turned off. With the use of modern
    // ECMAScript modules or tools like Babel, environments are automatically
    // assumed to be 'strict-mode' enabled. Therefore, there is no need to
    // enforce the strict mode flag in every entry of the code.
    'strict': 'off',
    'symbol-description': 'off',
    'vars-on-top': 'off',
    'yoda': 'error',
  },
};
