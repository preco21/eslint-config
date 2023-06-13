# [<img src="https://github.com/preco21/eslint-config/blob/main/media/logo.svg?raw=true" align="center" />](https://github.com/preco21/eslint-config) eslint-config

> ESLint shareable config for `@preco21`

This package provides @preco21's ESLint rules as an extensible shared config.

## Install

```shell
npm install --save-dev @preco21/eslint-config
```

### Peer dependencies

If you are only interested in the core rules (e.g. `rules/base`), you are good to go and you don’t need to follow installation instructions below.

There are configs that work with various plugins like `typescript`, `import`, `react`, and so on. (`import`, `react` rules are not yet supported)

To use those, you will need to install all its peer dependencies.

By default, to prevent installing unnecessary peer dependencies, all listed peer dependencies (except the `eslint` itself) are marked as optional via [`peerDependenciesMeta` field](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependenciesmeta) in the `package.json`. And it's recommended to install only peer dependencies that you are going to use.

Install the correct versions of each package, which are listed by the command:

```shell
npm info "@preco21/eslint-config@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```shell
npx install-peerdeps --dev @preco21/eslint-config
```

For more details about the installation, please refer to [Airbnb's ESLint config documentation](https://github.com/airbnb/javascript/blob/f5c14cae2ff58000cead98290b8ec4b54dda2f14/packages/eslint-config-airbnb-base/README.md#usage).

## Usage

Add some ESLint config to your `package.json`:

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "@preco21/eslint-config"
  }
}
```

Or with `.eslintrc`:

```json
{
  "root": true,
  "extends": "@preco21/eslint-config"
}
```

You can find more details about ESLint configuration [here](http://eslint.org/docs/user-guide/configuring).

## Available configs

The package exposes two types of the config: `top-level` and `individual`.

### Top-level configs

Top-level configs work in a zero-configuration manner, which you don't need extra configuration to use the config:

```json
{
  "extends": "@preco21/eslint-config"
}
```

Every top-level config has [ECMAScript modules](http://2ality.com/2014/09/es6-modules-final.html) support and latest ECMAScript features enabled by default.

### Individual configs

If the top-level configs don't fit in your use-cases, you may assemble your own config by mixing individual configs exposed from the `rules` folder:

```json
{
  "extends": [
    "@preco21/eslint-config/rules/base",
    "@preco21/eslint-config/rules/typescript",
    ...
  ]
}
```

It's recommended to use other configs upon the `base` config, since it contains sensible default rules to work with.

However, you can make changes to configuration for extra options like `env` or `parserOptions` if it's necessary.

For example:

```json
{
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "extends": [
    "@preco21/eslint-config/rules/base",
    "@preco21/eslint-config/rules/typescript"
  ]
}
```

Also, you may need to install optional plugins to use some config. (see [install](#install) section)

## Tips

### Browser

If you are in _browser_ environment, you can add `browser` option to `env` field:

```json
{
  "env": {
    "browser": true
  }
}
```

- [Why there's no such thing like `@preco21/eslint-config/browser`?](https://github.com/airbnb/javascript/issues/1002)

### Using globals

As ESLint makes no assumptions about what global variables exist in your execution environment, you will need to provide knowledge of what global variables are available. (e.g. referring external library at runtime)

You can define global variables in your configuration as follows:

```json
{
  "globals": {
    "$": "readonly"
  }
}
```

For each global variable key, set the corresponding value equal to `writable` to allow the variable to be overwritten or `readonly` to disallow overwriting.

See [here](https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals) for more details.

### Using `script` source type

Every top-level config treats your code are in ECMAScript modules enabled environment by default. Add this to your configuration if you want to disable it:

```json
{
  "parserOptions": {
    "sourceType": "script"
  }
}
```

### Using ECMAScript 5

Although this is not generally recommended, you can fallback to ECMAScript 5 by adding this to your configuration:

```json
{
  "extends": [
    "@preco21/eslint-config/rules/base",
    "@preco21/eslint-config/rules/with-es5"
  ]
}
```

Please note that the `with-es5` config automatically enables `strict` rule.

**Note:** However, ESLint might still show unexpected errors or warnings because the rules in this config were defined under the assumption that users will be writing ES2015+ code. In this case, you can safely disable the problematic rules manually.

### Enforcing strict mode

The config doesn't enable the [`strict` rule](https://eslint.org/docs/rules/strict) by default for a good reason as: Today, we all use tooling like `webpack`, `Babel`, and languages like `TypeScript`. And these tools automatically insert a `'use strict'` directive for each source to ensure your code is in `strict mode`.

Also, ECMAScript modules enabled environments are `strict mode` by default.

So, enabling `strict` rule to ensure if the `'use strict'` directive is properly placed in your source doesn't really help but redundant.

But, often you do need the rule for writing non-compiled code like CLI scripts.

Then, you can optionally enable the rule for the specific case:

```json
{
  "overrides": [
    {
      "files": ["bin/**/*.js"],
      "parserOptions": {
        "sourceType": "script",
        "ecmaFeatures": {
          "jsx": false
        }
      },
      "rules": {
        "strict": "error"
      }
    }
  ]
}
```

### Electron

If you are in [Electron](https://electronjs.org/) environment, you may need to add `electron` to `import/core-modules` setting. So that [`eslint-import-plugin`](https://github.com/benmosher/eslint-plugin-import) can consider the `electron` module as a `core` module like `path`:

```json
{
  "settings": {
    "import/core-modules": ["electron"]
  }
}
```

For more details, see [here](https://github.com/benmosher/eslint-plugin-import#importcore-modules).
