const EmailAddress = require('core/emailaddress');

test('constructor must throw error when value is not a valid email address', () => {
  expect(() => new EmailAddress('nobodyatexample.com')).toThrow(TypeError);
  expect(() => new EmailAddress('nobodyatexample.com')).toThrow('nobodyatexample.com is not a valid email address');
});

test('constructor must set value when value is a valid email address', () => {
  expect(new EmailAddress('nobody@example.com').value).toEqual('nobody@example.com');
});

test('constructor must trim value when value contains leading or trailing whitespace', () => {
  expect(new EmailAddress(' nobody@example.com ').value).toEqual('nobody@example.com');
  expect(new EmailAddress(' nobody@example.com ').value).not.toEqual(' nobody@example.com ');
});

test('equals must return true when other is case insensitive equal', () => {
  expect(new EmailAddress('nobody@example.com').equals(new EmailAddress('Nobody@Example.com'))).toBeTruthy();
  expect(new EmailAddress('Nobody@Example.com').equals(new EmailAddress('nobody@example.com'))).toBeTruthy();
});
