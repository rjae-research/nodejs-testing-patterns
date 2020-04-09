const NonEmptyString = require('core/nonemptystring');

class EmailAddress extends NonEmptyString {
  constructor(value) {
    super(value, true, false);
    if (value.indexOf('@') === -1) {
      throw new TypeError(`${value} is not a valid email address`);
    }
  }
}

module.exports = EmailAddress;
