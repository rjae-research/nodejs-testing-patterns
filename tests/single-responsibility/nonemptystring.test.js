const NonEmptyString = require('core/nonemptystring');

test('constructor must throw error when value is null or empty', () => {
  expect(() => new NonEmptyString(null)).toThrow(TypeError);
  expect(() => new NonEmptyString(null)).toThrow('value cannot be null or empty');
  expect(() => new NonEmptyString('')).toThrow(TypeError);
  expect(() => new NonEmptyString('')).toThrow('value cannot be null or empty');
});

test('constructor must set value when value is not null nor empty', () => {
  expect(new NonEmptyString('42').value).toEqual('42');
});
