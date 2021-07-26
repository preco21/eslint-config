'use strict';

/**
 * TypeScript rules
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    // typescript rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    // certain libraries make use of type information in their use cases:
    // https://github.com/typescript-eslint/typescript-eslint/issues/2559#issuecomment-692780580
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true,
    }],
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
        properties: 'off',
      },
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    // TODO: enable?
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-interface': ['error', {
      allowSingleExtends: true,
    }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    // TODO: enable?
    '@typescript-eslint/no-implicit-any-catch': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-namespace': ['error', {
      allowDeclarations: true,
    }],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    // this requires the `strictNullChecks` option so may be problematic
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    // TODO: enable?
    '@typescript-eslint/no-unnecessary-condition': 'off',
    // we enforce not to use `namespaces` by the `@typescript-eslint/no-namespace` rule
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    // the `strict` option will cover those cases, so
    // `@typescript-eslint/no-unsafe-*` rules are not necessary.
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // this will not work as expected since the `default-case` rule will always
    // require you to add `default` case anyway.
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': ['error', {
      parameter: true,
    }],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error',

    // extension rules
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    // for ongoing issues: https://github.com/typescript-eslint/typescript-eslint/issues/1824
    // related links:
    // - https://stackoverflow.com/questions/59851672/eslint-indent-and-ignorenodes-trouble-getting-ast-selectors-to-work-correctl/59852368#59852368
    // - https://astexplorer.net/
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: ['JSXElement', 'TSTypeParameterInstantiation'],
    }],
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
      enforceForSequenceExpressions: false,
      enforceForNewInMemberExpressions: false,
      enforceForFunctionPrototypeMethods: false,
    }],
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'warn',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    // even if the default `ignoreTypeValueShadow` option is enabled,
    // `@typescript-eslint/no-redeclare` rule above will prevent naming a type
    // the same as a variable.
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', {
      allowTaggedTemplates: true,
    }],
    // FIXME:
    // disabled due to the issue where it causes false-positive when recursive
    // type references in generics involved.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
      variables: false,
    }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    'return-await': 'off',
    '@typescript-eslint/return-await': 'warn',
    'semi': 'off',
    '@typescript-eslint/semi': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',
  },
};
