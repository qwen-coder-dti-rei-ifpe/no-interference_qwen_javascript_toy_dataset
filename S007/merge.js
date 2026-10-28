// merged: left touched the constant line, right touched the return line -> the
// two hunks never overlap. Trap avoided: '.10' vs '0.1' is formatting, not value.
const TAX = .10;

function total(price) {
  return Math.round((price + price * TAX) * 100) / 100;
}
