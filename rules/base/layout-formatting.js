'use strict';

// DEPRECATED except unicode-bom and line-comment-position

// https://eslint.org/blog/2023/10/deprecating-formatting-rules/

/**
 * Layout & Formatting
 * https://eslint.org/docs/latest/rules/#layout--formatting
 */
module.exports = {
  rules: {
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
      enforceForSequenceExpressions: false,
      enforceForNewInMemberExpressions: false,
      enforceForFunctionPrototypeMethods: false,
    }],
    'dot-location': ['error', 'property'],
    'no-multi-spaces': 'error',
    // The `functionPrototypeMethods` option is enabled because using such
    // expression without any assignment will end up in a syntax error as it may
    // seem as a function declaration.
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    // FIXME: Disabled due to the issue where it triggers false-positive in
    // multiline generic functions in TypeScript.
    // https://github.com/typescript-eslint/typescript-eslint/issues/942
    'function-paren-newline': 'off',
    // We encourage you to use long-form style function body when writing a
    // function that contains long content which may be formed in multiline or
    // break down into statements. doing so, you can manage the line length of
    // code easily, resulting more readable code.
    // use `() => { return LONG_CONTENT; }` instead of `() => LONG_CONTENT`
    // or `() => (<JSXContent />)` in JSX
    'implicit-arrow-linebreak': 'error',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    // For long strings, you can use multiline string concatenation
    // as `no-useless-concat` rule allows it. if you need string interpolation,
    // you can use it in conjunction with template literals:
    // 'very-long-class-name ' +
    // 'another-long-class-name ' + `modifier-${x}`
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': ['warn', {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'max-statements-per-line': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    // FIXME:
    // disabled due to the issue where it causes some conflict with
    // the fixer of `@typescript-eslint/comma-dangle` rule
    // { a: new Date } -> { a: new Date,() }
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    // Since we enforce separate variable declarations via `one-var` rule
    // and `key-spacing rule for aligning properties with arbitrary spaces, it's
    // safe to not include `smart-tabs` option.
    'no-mixed-spaces-and-tabs': 'error',
    // leading and trailing empty lines may be trimmed by text editor
    'no-multiple-empty-lines': 'error',
    'no-tabs': 'error',
    // leading and trailing spaces may be trimmed by text editor
    'no-trailing-spaces': 'warn',
    'no-whitespace-before-property': 'error',
    // since our `curly` rule doesn't allow any nonblock-statement, we can
    // safely disable this rule.
    'nonblock-statement-body-position': 'off',
    // this rule doesn't really help placing braces in the right position.
    // also, you often need to express object merging with spread syntax like this:
    // const next = { ...existing,
    //   extra: 'foo',
    // };
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'operator-linebreak': 'error',
    'padded-blocks': ['error', 'never', { allowSingleLineBlocks: true }],
    'padding-line-between-statements': 'off',
    // allowing double quotes for some edge cases, but always prefer single quotes
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'switch-colon-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'off',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'rest-spread-spacing': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
  },
};
