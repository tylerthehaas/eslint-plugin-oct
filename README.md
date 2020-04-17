# eslint-plugin-oct

Set of rules for OCTanner

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-oct`:

```
$ npm install eslint-plugin-oct --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-oct` globally.

## Usage

Add `oct` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["oct"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "oct/no-json-parse-without-try-catch": "error"
  }
}
```

## Supported Rules

- oct/no-json-parse-without-try-catch
