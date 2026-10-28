// merged: left's extraction plus right's comment on the reduce line, which is
// separated from the extracted line by a blank line -> disjoint hunks.
function shippingFor(subtotal) {
  return subtotal > 100 ? 0 : 10;
}

function invoice(items) {
  const subtotal = items.reduce((s, i) => s + i.price, 0); // sum of item prices

  const shipping = shippingFor(subtotal);
  return subtotal + shipping;
}
