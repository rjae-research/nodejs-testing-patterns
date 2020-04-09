class StringBase {
    #value;

    #cased;

    constructor(value, trimmed = true, cased = true) {
      this.#value = value === null || !trimmed ? value : value.trim();
      this.#cased = cased;
    }

    get value() { return this.#value; }

    equals(other) {
      if (other === null) {
        return false;
      }
      if (this.value === null && other.value === null) {
        return true;
      }
      if (this.value === null || this.#cased || other.#cased) {
        return this.value === other.value;
      }
      return this.value.toLocaleLowerCase() === other.value.toLocaleLowerCase();
    }

    toString() {
      return this.value;
    }
}

module.exports = StringBase;
