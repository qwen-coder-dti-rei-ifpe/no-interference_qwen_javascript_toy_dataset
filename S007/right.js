const TAX = 0.1;

function total(price) {
  return Math.round((price + price * TAX) * 100) / 100; // right edited the body
}
