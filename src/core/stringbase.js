class StringBase {
  constructor(value, trimmed = true, cased = true) {
    this._value = value === null || !trimmed ? value : value.trim();
    this._cased = cased;
  }

  get value() { return this._value; }

  get cased() { return this._cased; }

  equals(other) {
    if (other === null) {
      return false;
    }
    if (this.cased || other.cased) {
      return Object.is(this.value, other.value);
    }
    return this.value.toLocaleLowerCase() === other.value.toLocaleLowerCase();
  }

  toString() {
    return this.value;
  }
}

module.exports = StringBase;
