const { v4: uuidv4 } = require('uuid');

class User {
  constructor(firstName, lastName, emailAddress, id = null) {
    if (firstName === null || firstName.trim().length === 0) {
      throw new TypeError('firstName cannot be null or whitespace');
    } else {
      this._firstName = firstName;
    }
    if (lastName === null || lastName.trim().length === 0) {
      throw new TypeError('lastName cannot be null or whitespace');
    } else {
      this._lastName = lastName;
    }
    // BUG: emailAddress allows whitespace.
    // How did this happen? Someone forgot to change this validation.
    // This is an example of misplaced responsibilities.
    if (emailAddress === null || emailAddress.length === 0) {
      throw new TypeError('emailAddress cannot be null or empty');
    } else {
      this._emailAddress = emailAddress;
    }
    this._id = id === null ? uuidv4() : id;
  }

  get firstName() { return this._firstName; }

  get lastName() { return this._lastName; }

  get emailAddress() { return this._emailAddress; }

  get id() { return this._id; }
}

module.exports = User;
