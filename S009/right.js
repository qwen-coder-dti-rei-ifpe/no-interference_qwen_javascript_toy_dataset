function checkEmail(v) {
  return /.+@.+/.test(v);
}

function checkPhone(v) {
  return /^[0-9- ]+$/.test(v);
}
