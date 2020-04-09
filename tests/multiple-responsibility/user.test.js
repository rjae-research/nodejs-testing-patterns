const User = require('anti-patterns/multiple-responsibility/user');
const { v4: uuidv4 } = require('uuid');
const isUuid = require('uuid-validate');

test('constructor must throw error when firstName is null or whitespace', () => {
  expect(() => new User(null, 'Smith', '@')).toThrow('firstName cannot be null or whitespace');
  expect(() => new User('', 'Smith', '@')).toThrow('firstName cannot be null or whitespace');
  expect(() => new User('    ', 'Smith', '@')).toThrow('firstName cannot be null or whitespace');
  expect(() => new User('\t', 'Smith', '@')).toThrow('firstName cannot be null or whitespace');
});

test('constructor must throw error when lastName is null or whitespace', () => {
  expect(() => new User('Bob', null, '@')).toThrow('lastName cannot be null or whitespace');
  expect(() => new User('Bob', '', '@')).toThrow('lastName cannot be null or whitespace');
  expect(() => new User('Bob', '    ', '@')).toThrow('lastName cannot be null or whitespace');
  expect(() => new User('Bob', '\t', '@')).toThrow('lastName cannot be null or whitespace');
});

test('constructor must throw error when emailAddress is null or empty', () => {
  expect(() => new User('Bob', 'Smith', null)).toThrow('emailAddress cannot be null or empty');
  expect(() => new User('Bob', 'Smith', '')).toThrow('emailAddress cannot be null or empty');
});

test('constructor must set id when id is null', () => {
  expect(new User('Bob', 'Smith', '@').id).not.toBeNull();
});

test('constructor must set id when id is not null', () => {
  const expected = uuidv4();
  const actual = new User('Bob', 'Smith', '@', expected).id;
  expect(actual).toEqual(expected);
  expect(isUuid(actual)).toBeTruthy();
});

test('constructor must set firstName when firstName is valid', () => {
  expect(new User('Bob', 'Smith', '@').firstName).toEqual('Bob');
});

test('constructor must set lastName when lastName is valid', () => {
  expect(new User('Bob', 'Smith', '@').lastName).toEqual('Smith');
});

test('constructor must set emailAddress when emailAddress is valid', () => {
  expect(new User('Bob', 'Smith', '@').emailAddress).toEqual('@');
});
