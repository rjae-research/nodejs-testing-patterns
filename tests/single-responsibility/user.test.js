const User = require('patterns/single-responsibility/user');
const { v4: uuidv4 } = require('uuid');
const isUuid = require('uuid-validate');
const NonEmptyString = require('core/nonemptystring');
const EmailAddress = require('core/emailaddress');

test('constructor must throw error when firstName is null', () => {
  expect(() => new User(null, new NonEmptyString('Smith'), new EmailAddress('@'))).toThrow(TypeError);
  expect(() => new User(null, new NonEmptyString('Smith'), new EmailAddress('@'))).toThrow('firstName cannot be null');
});

test('constructor must throw error when lastName is null', () => {
  expect(() => new User(new NonEmptyString('Bob'), null, new EmailAddress('@'))).toThrow(TypeError);
  expect(() => new User(new NonEmptyString('Bob'), null, new EmailAddress('@'))).toThrow('lastName cannot be null');
});

test('constructor must throw error when emailAddress is null', () => {
  expect(() => new User(new NonEmptyString('Bob'), new NonEmptyString('Smith'), null)).toThrow(TypeError);
  expect(() => new User(new NonEmptyString('Bob'), new NonEmptyString('Smith'), null)).toThrow('emailAddress cannot be null');
});

test('constructor must set id when id is null', () => {
  expect(new User(new NonEmptyString('Bob'), new NonEmptyString('Smith'), new EmailAddress('@')).id).not.toBeNull();
});

test('constructor must set id when id is not null', () => {
  const expected = uuidv4();
  const actual = new User(new NonEmptyString('Bob'), new NonEmptyString('Smith'), new EmailAddress('@'), expected).id;
  expect(actual).toEqual(expected);
  expect(isUuid(actual)).toBeTruthy();
});

test('constructor must set firstName when firstName is valid', () => {
  expect(new User(new NonEmptyString('Bob'), new NonEmptyString('Smith'), new EmailAddress('@')).firstName.value).toEqual('Bob');
});

test('constructor must set lastName when lastName is valid', () => {
  expect(new User(new NonEmptyString('Bob'), new NonEmptyString('Smith'), new EmailAddress('@')).lastName.value).toEqual('Smith');
});

test('constructor must set emailAddress when emailAddress is valid', () => {
  expect(new User(new NonEmptyString('Bob'), 'Smith', new EmailAddress('@')).emailAddress.value).toEqual('@');
});
