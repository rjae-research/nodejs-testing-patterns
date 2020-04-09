const EmailAddress = require('core/emailaddress');

test('constructor must throw error when value is not a valid email address', () => {
  expect(() => new EmailAddress('nobodyatexample.com')).toThrow(TypeError);
  expect(() => new EmailAddress('nobodyatexample.com')).toThrow('nobodyatexample.com is not a valid email address');
});

test('constructor must set value when value is a valid email address', () => {
  expect(new EmailAddress('nobody@example.com').value).toEqual('nobody@example.com');
});
