/* eslint-disable no-bitwise */
function hashCode(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash += (value.charCodeAt(i) * 31) ** (value.length - i);
    hash &= hash;
  }
  return Math.abs(hash);
}

module.exports = hashCode;
