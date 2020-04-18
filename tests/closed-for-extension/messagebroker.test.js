const MessageProducer = require('anti-patterns/closed-for-extension/messageproducer');
const MessageBroker = require('anti-patterns/closed-for-extension/messagebroker');

class MockMessageProducer extends MessageProducer {
  constructor() {
    super();
    this._produceCalled = 0;
  }

  get produceCalled() { return this._produceCalled; }

  set produceCalled(value) { this._produceCalled = value; }

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

test('getPartition must return 1 when called', () => {
  expect(MessageBroker.getPartition('42')).toEqual(1);
});

test('publish must call publisher produce', () => {
  expect(new MessageBroker(null).getMessage('42')).toEqual(JSON.stringify('42'));
});
