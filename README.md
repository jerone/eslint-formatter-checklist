# eslint-formatter-checklist

[![npm](https://img.shields.io/npm/v/eslint-formatter-checklist)](https://www.npmjs.com/package/eslint-formatter-checklist)
[![CI](https://github.com/jerone/eslint-formatter-checklist/actions/workflows/ci.yml/badge.svg)](https://github.com/jerone/eslint-formatter-checklist/actions/workflows/ci.yml)
[![GitHub issues](https://img.shields.io/github/issues/jerone/eslint-formatter-checklist)](https://github.com/jerone/eslint-formatter-checklist)
[![MIT license](https://img.shields.io/github/license/jerone/eslint-formatter-checklist)](https://opensource.org/licenses/MIT)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> An ESLint formatter with checklist style.

## Installation

```shell
npm install eslint-formatter-checklist --save-dev
```

## Usage

Run:

```shell
npx eslint --format checklist .
```

Or add script in your `package.json`:

```json
"scripts": {
  "lint": "eslint -f checklist ."
}
```

## Screenshot

Screenshot with error and warning:

![Screenshot with error and warning](docs/screenie-error-and-warning.jpg)

Screenshot of success:

![Screenshot of success](docs/screenie-successjpg.jpg)
