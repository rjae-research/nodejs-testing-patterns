/* eslint-disable max-classes-per-file */
const MessageProducer = require('patterns/open-for-extension/messageproducer');
const MessageBroker = require('patterns/open-for-extension/messagebroker');
const ShardedMessageBroker = require('patterns/open-for-extension/shardedmessagebroker');
const hashCode = require('core/hashcode');

class MockShardedMessageBroker extends ShardedMessageBroker {
  constructor(producer) {
    super(producer);
    this._messages = new Map();
  }

  get messages() { return this._messages; }

  set messages(value) { this._messages = value; }

  publishMessage(partition, message) {
    super.publishMessage(partition, message);
    if (this.messages.has(partition)) {
      this.messages[partition].push(message);
    } else {
      this.messages[partition] = [message];
    }
  }
}

class MockMessageProducer extends MessageProducer {
  constructor() {
    super();
    this._produceCalled = 0;
  }

  produce(partition, message) {
    super.produce(partition, message);
    this._produceCalled += 1;
  }

  get produceCalled() { return this._produceCalled; }
}

test('publish must call publisher produce', () => {
  const producer = new MessageProducer();
  const broker = new MockShardedMessageBroker(producer);
  broker.publish('42');
  const message = JSON.stringify('42');
  expect(broker.messages[hashCode(message)][0]).toEqual(message);
});

test('getPartition must return 1 when called', () => {
  expect(new MessageBroker(null).getPartition()).toEqual(1);
});

test('publishMessage must call producer publish', () => {
  const producer = new MockMessageProducer();
  expect(producer.produceCalled).toEqual(0);
  new MessageBroker(producer).publishMessage(1, '42');
  expect(producer.produceCalled).toEqual(1);
});
