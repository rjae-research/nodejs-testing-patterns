const { v4: uuidv4 } = require('uuid');
const raiseNullError = require('core/raisenullerror');

class User {
  constructor(firstName, lastName, emailAddress, id = null) {
    this._firstName = firstName ?? raiseNullError('firstName');
    this._lastName = lastName ?? raiseNullError('lastName');
    this._emailAddress = emailAddress ?? raiseNullError('emailAddress');
    this._id = id === null ? uuidv4() : id;
  }

  get firstName() { return this._firstName; }

  get lastName() { return this._lastName; }

  get emailAddress() { return this._emailAddress; }

  get id() { return this._id; }
}

module.exports = User;
