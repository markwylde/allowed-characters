# allowed-characters
[![Build Status](https://travis-ci.org/markwylde/allowed-characters.svg?branch=master)](https://travis-ci.org/markwylde/allowed-characters)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/markwylde/allowed-characters)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/markwylde/allowed-characters)](https://github.com/markwylde/allowed-characters/blob/master/package.json)
[![GitHub](https://img.shields.io/github/license/markwylde/allowed-characters)](https://github.com/markwylde/allowed-characters/blob/master/LICENSE)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)


Throw an error if a string contains unallowed characters

## Installation

```bash
npm i --save allowed-characters
```

## Usage

allowedCharacters -> allowed -> string -> string|error

### 1. Correct characters
```javascript
allowedCharacters('123', '123') === '123';
```

### 2. Incorrect characters
```javascript
allowedCharacters('123', '1234')
// throws error: 'contained unallowed character "4"'
```
