# eslint-formatter-checklist

[![npm](https://img.shields.io/npm/v/eslint-formatter-checklist)](https://www.npmjs.com/package/eslint-formatter-checklist)
[![GitHub Action: CI](https://img.shields.io/github/actions/workflow/status/jerone/eslint-formatter-checklist/.github/workflows/ci.yml?branch=master&label=CI&logo=github)](https://github.com/jerone/eslint-formatter-checklist/actions/workflows/ci.yml)
[![GitHub Action: Security](https://img.shields.io/github/actions/workflow/status/jerone/eslint-formatter-checklist/.github/workflows/security.yml?branch=master&label=Security&logo=github)](https://github.com/jerone/eslint-formatter-checklist/actions/workflows/security.yml)
[![Codecov](https://codecov.io/gh/jerone/eslint-formatter-checklist/branch/master/graph/badge.svg?token=BTJRO49LZT)](https://codecov.io/gh/jerone/eslint-formatter-checklist)
[![SonarCloud: Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jerone_eslint-formatter-checklist&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jerone_eslint-formatter-checklist)
[![SonarCloud: Coverage](https://sonarcloud.io/api/project_badges/measure?project=jerone_eslint-formatter-checklist&metric=coverage)](https://sonarcloud.io/summary/new_code?id=jerone_eslint-formatter-checklist)
[![SonarCloud: Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jerone_eslint-formatter-checklist&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=jerone_eslint-formatter-checklist)
[![SonarCloud: Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jerone_eslint-formatter-checklist&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=jerone_eslint-formatter-checklist)
[![SonarCloud: Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jerone_eslint-formatter-checklist&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jerone_eslint-formatter-checklist)
[![SonarCloud: Bugs](https://sonarcloud.io/api/project_badges/measure?project=jerone_eslint-formatter-checklist&metric=bugs)](https://sonarcloud.io/summary/new_code?id=jerone_eslint-formatter-checklist)
[![SonarCloud: Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=jerone_eslint-formatter-checklist&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=jerone_eslint-formatter-checklist)
[![SonarCloud: Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jerone_eslint-formatter-checklist&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=jerone_eslint-formatter-checklist)
[![Snyk vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/jerone/eslint-formatter-checklist?logo=snyk)](https://snyk.io/test/github/jerone/eslint-formatter-checklist)
[![GitHub issues](https://img.shields.io/github/issues/jerone/eslint-formatter-checklist?logo=github)](https://github.com/jerone/eslint-formatter-checklist)
[![MIT license](https://img.shields.io/github/license/jerone/eslint-formatter-checklist)](https://opensource.org/licenses/MIT)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat&logo=prettier)](https://github.com/prettier/prettier)

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

![Screenshot of success](docs/screenie-success.jpg)

<br/>
<br/>

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg)](https://stand-with-ukraine.pp.ua)
