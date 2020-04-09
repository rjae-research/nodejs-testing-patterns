const { v4: uuidv4 } = require('uuid');

class User {
  #emailAddress;

  #firstName;

  #id;

  #lastName;

  constructor(firstName, lastName, emailAddress, id = null) {
    if (firstName === null || firstName.trim().length === 0) {
      throw new TypeError('firstName cannot be null or whitespace');
    } else {
      this.#firstName = firstName;
    }
    if (lastName === null || lastName.trim().length === 0) {
      throw new TypeError('lastName cannot be null or whitespace');
    } else {
      this.#lastName = lastName;
    }
    // BUG: emailAddress allows whitespace.
    // How did this happen? Someone forgot to change this validation.
    // This is an example of misplaced responsibilities.
    if (emailAddress === null || emailAddress.length === 0) {
      throw new TypeError('emailAddress cannot be null or empty');
    } else {
      this.#emailAddress = emailAddress;
    }
    this.#id = id === null ? uuidv4() : id;
  }

  get firstName() { return this.#firstName; }

  get lastName() { return this.#lastName; }

  get emailAddress() { return this.#emailAddress; }

  get id() { return this.#id; }
}

module.exports = User;
