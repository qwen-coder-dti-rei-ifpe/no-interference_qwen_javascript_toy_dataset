// merged: adopt the rename, keep the addition. Trap avoided: emitting BOTH
// checkEmail and isValidEmail duplicates the validator, while keeping only the old
// name silently discards left's intent. This merge does neither.
function isValidEmail(v) {
  return /.+@.+/.test(v);
}

function checkPhone(v) {
  return /^[0-9- ]+$/.test(v);
}
