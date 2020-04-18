class StringBase {
  constructor(value, trimmed = true, cased = true) {
    this._value = value === null || !trimmed ? value : value.trim();
    this._cased = cased;
  }

  get value() { return this._value; }

  set value(v) { this._value = v; }

  get cased() { return this._cased; }

  set cased(v) { this._cased = v; }

  equals(other) {
    if (other === null) {
      return false;
    }
    if (this.value === null && other.value === null) {
      return true;
    }
    if (this.value === null || this.cased || other.cased) {
      return this.value === other.value;
    }
    return this.value.toLocaleLowerCase() === other.value.toLocaleLowerCase();
  }

  toString() {
    return this.value;
  }
}

module.exports = StringBase;
