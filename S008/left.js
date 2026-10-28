function shippingFor(subtotal) {
  return subtotal > 100 ? 0 : 10; // left EXTRACTED the shipping expression
}

function invoice(items) {
  const subtotal = items.reduce((s, i) => s + i.price, 0);

  const shipping = shippingFor(subtotal);
  return subtotal + shipping;
}
