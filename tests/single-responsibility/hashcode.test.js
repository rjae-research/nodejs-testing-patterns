const hashCode = require('core/hashcode');

test('hashCode must return same hashcode when value is same', () => {
  expect(hashCode('42')).toEqual(hashCode('42'));
  expect(hashCode('42')).toEqual(2600094);
});

test('hashCode must return different hashcode when value is different', () => {
  expect(hashCode('42')).not.toEqual(hashCode('43'));
});
