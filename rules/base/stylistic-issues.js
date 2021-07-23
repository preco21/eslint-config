'use strict';

/**
 * stylistic issues
 * https://eslint.org/docs/rules/#stylistic-issues
 */
module.exports = {
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    // if you need to use non-camelcase globals, use `eslint-disable` comments around it
    'camelcase': ['error', { properties: 'never' }],
    'capitalized-comments': 'off',
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
    'consistent-this': 'off',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'off',
    'func-names': ['warn', 'as-needed'],
    // prefer function declaration by default, use arrow functions for any other cases
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'function-call-argument-newline': ['error', 'consistent'],
    // FIXME:
    // disabled due to the issue where it triggers false-positive in multiline
    // generic functions in TypeScript.
    // https://github.com/typescript-eslint/typescript-eslint/issues/942
    'function-paren-newline': 'off',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    // we encourage you to use long-form style function body when writing a
    // function that contains long content which may be formed in multiline or
    // break down into statements. doing so, you can manage the line length of
    // code easily, resulting more readable code.
    // use `() => { return LONG_CONTENT; }` instead of `() => LONG_CONTENT`
    // or `() => (<JSXContent />)` in JSX
    'implicit-arrow-linebreak': 'error',
    'indent': ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: ['JSXElement'],
    }],
    // enabled by `react` rules
    'jsx-quotes': 'off',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'max-depth': 'off',
    // for long strings, you can use multiline string concatenation
    // as `no-useless-concat` rule allows it. if you need string interpolation,
    // you can use it in conjunction with template literals:
    // 'very-long-class-name ' +
    // 'another-long-class-name ' + `modifier-${x}`
    'max-len': ['warn', {
      code: 100,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    // not really necessary to check user-end code for constructor invocation
    'new-cap': 'off',
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'off',
    // since we enforce separate variable declarations via `one-var` rule
    // and `key-spacing rule for aligning properties with arbitrary spaces, it's
    // safe to not include `smart-tabs` option.
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': ['error', { ignoreNonDeclaration: true }],
    // leading and trailing empty lines may be trimmed by text editor
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    // leading and trailing spaces may be trimmed by text editor
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': 'off',
    // prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
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
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'one-var': ['error', 'never'],
    // since our `one-var` rule doesn't allow one variable declaration for all,
    // we can safely disable this rule.
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': 'error',
    'padded-blocks': ['error', 'never', {
      allowSingleLineBlocks: true,
    }],
    'padding-line-between-statements': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-object-spread': 'off',
    'quote-props': ['warn', 'consistent-as-needed'],
    // allowing double quotes for some edge cases, but always prefer single quotes
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'switch-colon-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        // space here to support sprockets directives, slash for TS /// comments
        markers: ['=', '!', '/'],
      },
      block: {
        exceptions: ['-', '+'],
        // space here to support sprockets directives and flow comment types
        markers: ['=', '!', ':', '::'],
        balanced: true,
      },
    }],
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-regex': 'off',
  },
};
