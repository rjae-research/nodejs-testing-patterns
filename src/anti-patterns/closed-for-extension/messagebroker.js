/* eslint-disable no-unused-vars */
class MessageBroker {
    #producer

    constructor(producer) {
      this.#producer = producer;
    }

    static getPartition(message) {
      return 1;
    }

    publish(value) {
      const message = this.getMessage(value);
      const partition = MessageBroker.getPartition(message);
      this.#producer.produce(partition, message);
    }

    getMessage(value) {
      return JSON.stringify(value);
    }
}

module.exports = MessageBroker;
