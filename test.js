/* eslint-disable no-undef */
require('./index.js');
// require('./umd/anstrilib');
// require('./esm/index.js');

test('capitalize', () => {
  expect('hello'.capitalize()).toBe('Hello');
  expect('hello world'.capitalize()).toBe('Hello world');
  expect(' hello world'.capitalize()).toBe(' hello world');
});

test('allCaps', () => {
  expect('hello'.allCaps()).toBe('HELLO');
  expect('hello world'.allCaps()).toBe('HELLO WORLD');
  expect(' hello world'.allCaps()).toBe(' HELLO WORLD');
});

test('capitalizeWords', () => {
  expect('hello'.capitalizeWords()).toBe('Hello');
  expect('hello world'.capitalizeWords()).toBe('Hello World');
  expect(' hello world'.capitalizeWords()).toBe(' Hello World');
});

test('capitalizeHeadline', () => {
  expect('hello the a'.capitalizeHeadline()).toBe('Hello the a');
  expect('hello the from but boo'.capitalizeHeadline()).toBe('Hello the from but Boo');
  expect('hello world here in'.capitalizeHeadline()).toBe('Hello World Here in');
});

test('removeExtraSpaces', () => {
  expect('  hello the a  '.removeExtraSpaces()).toBe('hello the a');
  expect('hello   the from   but boo'.removeExtraSpaces()).toBe('hello the from but boo');
});

test('kabobCase', () => {
  expect('hello the a'.kabobCase()).toBe('hello-the-a');
  expect(' hello the From but  Boo'.kabobCase()).toBe('hello-the-from-but-boo');
});

test('snakeCase', () => {
  expect('hello the a'.snakeCase()).toBe('hello_the_a');
  expect(' hello the From but  Boo'.snakeCase()).toBe('hello_the_from_but_boo');
});

test('camelCase', () => {
  expect('hello the a'.camelCase()).toBe('helloTheA');
  expect(' hello the From but  Boo'.camelCase()).toBe('helloTheFromButBoo');
});
