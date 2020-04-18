const StringBase = require('core/stringbase');

test('constructor must set value to null when value is null', () => {
  expect(new StringBase(null).value).toBeNull();
});

test('constructor must not trim value when trimmed is false', () => {
  expect(new StringBase(' 42 ', false).value).toEqual(' 42 ');
});

test('constructor must trim value when trimmed is true', () => {
  expect(new StringBase(' 42 ').value).toEqual('42');
});

test('equals must return false when other is null', () => {
  expect(new StringBase('42').equals(null)).toBeFalsy();
});

test('equals must return true when value is null and other value is null', () => {
  expect(new StringBase(null).equals(new StringBase(null))).toBeTruthy();
});

test('equals must return false when value is null and other value is not null', () => {
  expect(new StringBase(null).equals(new StringBase('42'))).toBeFalsy();
});

test('equals must return false when cased is true or other cased is true and value is not equal to other value', () => {
  expect(new StringBase('A').equals(new StringBase('a', true, false))).toBeFalsy();
  expect(new StringBase('A', true, false).equals(new StringBase('a'))).toBeFalsy();
  expect(new StringBase('A').equals(new StringBase('a'))).toBeFalsy();
});

test('equals must return true when cased is true or other cased is true and value is equal to other value', () => {
  expect(new StringBase('A').equals(new StringBase('A', true, false))).toBeTruthy();
  expect(new StringBase('A', true, false).equals(new StringBase('A'))).toBeTruthy();
  expect(new StringBase('A').equals(new StringBase('A'))).toBeTruthy();
});

test('equals must return true when cased is false and other cased is false and value is equal to other value', () => {
  expect(new StringBase('A', true, false).equals(new StringBase('a', true, false))).toBeTruthy();
  expect(new StringBase('a', true, false).equals(new StringBase('A', true, false))).toBeTruthy();
  expect(new StringBase('A', true, false).equals(new StringBase('A', true, false))).toBeTruthy();
});

test('equals must return false when cased is false and other cased is false and value is not equal to other value',
  () => {
    expect(new StringBase('A', true, false).equals(new StringBase('b', true, false))).toBeFalsy();
    expect(new StringBase('b', true, false).equals(new StringBase('A', true, false))).toBeFalsy();
    expect(new StringBase('A', true, false).equals(new StringBase('B', true, false))).toBeFalsy();
  });

test('toString must return value when called', () => {
  expect(`${new StringBase('42')}`).toEqual('42');
});
