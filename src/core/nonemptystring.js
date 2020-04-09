const StringBase = require('./stringbase');

class NonEmptyString extends StringBase {
  constructor(value, trimmed = true, cased = true) {
    super(value, trimmed, cased);
    if (value === null || value.length === 0) {
      throw new TypeError('value cannot be null or empty');
    }
  }
}

module.exports = NonEmptyString;
