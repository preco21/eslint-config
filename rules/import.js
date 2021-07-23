'use strict';

/**
 * `eslint-plugin-import` rules
 */
module.exports = {
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/ignore': ['node_modules'],
  },
  rules: {
    // allow sorting named exports in alphabetical order
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],

    // static analysis
    'import/no-unresolved': ['error', { commonjs: true }],

    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': ['error', { allowComputed: true }],
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'off',

    // helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    // TODO: Enable when this rule goes a way more stable
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    // Original: 'import/no-deprecated': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',

    // module systems
    // TODO: Disabling this rule due to Unambiguous JavaScript Grammar is rejected from tc39 and moved to inactive proposals
    // https://github.com/tc39/proposals/blob/eb23a429df79d13e0d8fff89dc38a53f5085fa1b/inactive-proposals.md
    // Original: 'import/unambiguous': 'error',
    'import/unambiguous': 'off',
    // Original: 'import/no-commonjs': ['error', {allowRequire: true, allowPrimitiveModules: true}],
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',

    // style guide
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', {
      js: 'never',
      jsx: 'never',
    }],
    'import/order': ['error', {
      'newlines-between': 'never',
    }],
    'import/newline-after-import': 'error',
    // https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-default-export': 'off',
    'import/no-anonymous-default-export': ['error', {
      allowArray: true,
      allowArrowFunction: true,
      allowLiteral: true,
      allowObject: true,
    }],
    'import/group-exports': 'off',
  },
};
