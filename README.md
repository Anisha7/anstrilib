# anstrilib

![npm](https://img.shields.io/npm/v/anstrilib) ![GitHub package.json version](https://img.shields.io/github/package-json/v/anisha7/anstrilib) ![GitHub repo size](https://img.shields.io/github/repo-size/anisha7/anstrilib?style=plastic) ![GitHub last commit](https://img.shields.io/github/last-commit/anisha7/anstrilib?style=plastic) ![GitHub top language](https://img.shields.io/github/languages/top/anisha7/anstrilib) ![GitHub issues](https://img.shields.io/github/issues-raw/anisha7/anstrilib) ![npm collaborators](https://img.shields.io/npm/collaborators/anstrilib) ![GitHub followers](https://img.shields.io/github/followers/anisha7?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/anisha7/anstrilib?style=social) [![Coverage Status](https://coveralls.io/repos/github/Anisha7/anstrilib/badge.svg?branch=master)](https://coveralls.io/github/Anisha7/anstrilib?branch=master)

 A javascript string library

## How to use:

#### capitalize()
Capitalizes the first letter of the string.

`"hello".capitalize() // "Hello"`

#### allCaps()
Capitalizes all letters of the string.

`"hello".allCaps() // "HELLO"`

#### capitalizeWords()
Capitalizes the first character of each word, in a space separated string

`"hello world".capitalizeWords() // "Hello World"`

#### capitalizeHeadline()
Capitalizes the first character of each headline word, in a space separated string.
Headline words exclude the, in, a, an, and, but, for, at, by, from (unless its the first word).

`"hello from boo".capitalizeHeadline() // "Hello from Boo"`

#### removeExtraSpaces()
Removes all spaces from the beginning and end of a string along with any extra spaces in the middle

`"  hello from   boo  ".removeExtraSpaces() // "hello from boo"`

#### kabobCase()
Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.

`" hello  From the  Boo".kabobCase() // "hello-from-the-boo"`

#### snakeCase()
Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.

`" hello   From the  Boo".kabobCase() // "hello_from_the_boo"`

#### camelCase()
Lowercases the first character of the first word, uppercases the first character of all other words, and removes all spaces.

``" hello  From the  boo".kabobCase() // "helloTheFromButBoo"``

## Test Coverage:

```npx jest --coverage```

 PASS  ./test.js
  ✓ capitalize (4ms)
  ✓ allCaps (1ms)
  ✓ capitalizeWords
  ✓ capitalizeHeadline (2ms)
  ✓ removeExtraSpaces
  ✓ kabobCase (1ms)
  ✓ snakeCase
  ✓ camelCase (1ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 index.js |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        2.132s
Ran all test suites.