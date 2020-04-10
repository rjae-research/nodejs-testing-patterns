const MessageProducer = require('anti-patterns/closed-for-extension/messageproducer');
const MessageBroker = require('anti-patterns/closed-for-extension/messagebroker');

class MockMessageProducer extends MessageProducer {
  constructor() {
    super();
    this.produceCalled = 0;
  }

  produce(partition, message) {
    super.produce(partition, message);
    this.produceCalled += 1;
  }
}

test('publish must call publisher produce', () => {
  const producer = new MockMessageProducer();
  expect(producer.produceCalled).toEqual(0);
  new MessageBroker(producer).publish('42');
  expect(producer.produceCalled).toEqual(1);
});
