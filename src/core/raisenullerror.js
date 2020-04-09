function raiseNullError(name) {
  throw new TypeError(`${name} cannot be null`);
}

module.exports = raiseNullError;
