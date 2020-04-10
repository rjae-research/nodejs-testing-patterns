const MessageProducer = require('anti-patterns/closed-for-extension/messageproducer');

class FakeMessageProducer extends MessageProducer {
}

test('constructor must throw error when not called from sub-class', () => {
  expect(() => new MessageProducer()).toThrow(TypeError);
  expect(() => new MessageProducer()).toThrow('Cannot construct abstract class');
});

test('constructor must throw error when sub-class is abstract', () => {
  expect(() => new FakeMessageProducer()).toThrow(TypeError);
  expect(() => new FakeMessageProducer()).toThrow('Cannot construct abstract class');
});
