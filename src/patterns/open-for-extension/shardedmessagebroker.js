const hashCode = require('core/hashcode');
const MessageBroker = require('./messagebroker');

class ShardedMessageBroker extends MessageBroker {
  getPartition(message) {
    super.getPartition(message);
    return hashCode(message);
  }
}

module.exports = ShardedMessageBroker;
