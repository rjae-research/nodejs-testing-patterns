const { v4: uuidv4 } = require('uuid');
const raiseNullError = require('core/raisenullerror');

class User {
    #emailAddress

    #firstName

    #id

    #lastName

    constructor(firstName, lastName, emailAddress, id = null) {
      // When babel-eslint 11.0.0 released replace validation with field decorator.
      this.#firstName = firstName ?? raiseNullError('firstName');
      this.#lastName = lastName ?? raiseNullError('lastName');
      this.#emailAddress = emailAddress ?? raiseNullError('emailAddress');
      this.#id = id === null ? uuidv4() : id;
    }

    get firstName() { return this.#firstName; }

    get lastName() { return this.#lastName; }

    get emailAddress() { return this.#emailAddress; }

    get id() { return this.#id; }
}

module.exports = User;
