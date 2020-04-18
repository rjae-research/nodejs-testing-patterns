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

  set firstName(value) { this._firstName = value; }

  get lastName() { return this._lastName; }

  set lastName(value) { this._lastName = value; }

  get emailAddress() { return this._emailAddress; }

  set emailAddress(value) { this._emailAddress = value; }

  get id() { return this._id; }

  set id(value) { this._id = value; }
}

module.exports = User;
