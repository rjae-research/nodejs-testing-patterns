/* eslint-disable no-unused-vars */
class MessageProducer {
  constructor() {
    if (this.produce === MessageProducer.prototype.produce) {
      throw new TypeError('Cannot construct abstract class');
    }
  }

  produce(partition, message) {
  }
}

module.exports = MessageProducer;
