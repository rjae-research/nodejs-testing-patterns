/* eslint-disable max-classes-per-file */
const MessageProducer = require('patterns/open-for-extension/messageproducer');
const ShardedMessageBroker = require('patterns/open-for-extension/shardedmessagebroker');
const hashCode = require('core/hashcode');

class MockShardedMessageBroker extends ShardedMessageBroker {
  constructor(producer) {
    super(producer);
    this.messages = new Map();
  }

  publishMessage(partition, message) {
    super.publishMessage(partition, message);
    if (this.messages.has(partition)) {
      this.messages[partition].push(message);
    } else {
      this.messages[partition] = [message];
    }
  }
}

test('publish must call publisher produce', () => {
  const producer = new MessageProducer();
  const broker = new MockShardedMessageBroker(producer);
  broker.publish('42');
  const message = JSON.stringify('42');
  expect(broker.messages[hashCode(message)][0]).toEqual(message);
});
