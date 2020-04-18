/* eslint-disable no-unused-vars */
class MessageBroker {
  constructor(producer) {
    this._producer = producer;
  }

  get producer() {
    return this._producer;
  }

  set producer(value) {
    this._producer = value;
  }

  getPartition(message) {
    return 1;
  }

  publish(value) {
    const message = this.getMessage(value);
    const partition = this.getPartition(message);
    this.publishMessage(partition, message);
  }

  publishMessage(partition, message) {
    this.producer.produce(partition, message);
  }

  getMessage(value) {
    return JSON.stringify(value);
  }
}

module.exports = MessageBroker;
