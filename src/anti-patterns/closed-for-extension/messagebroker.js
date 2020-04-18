/* eslint-disable no-unused-vars */
class MessageBroker {
  constructor(producer) {
    this._producer = producer;
  }

  static getPartition(message) {
    return 1;
  }

  get producer() { return this._producer; }

  publish(value) {
    const message = this.getMessage(value);
    const partition = MessageBroker.getPartition(message);
    this.producer.produce(partition, message);
  }

  getMessage(value) {
    return JSON.stringify(value);
  }
}

module.exports = MessageBroker;
