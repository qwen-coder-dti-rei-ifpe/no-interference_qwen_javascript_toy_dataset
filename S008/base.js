function invoice(items) {
  const subtotal = items.reduce((s, i) => s + i.price, 0);

  const shipping = subtotal > 100 ? 0 : 10;
  return subtotal + shipping;
}
