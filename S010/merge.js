// merged: the two declarations land at opposite ends -> textual merge is clean.
// Trap avoided: pasting both sides verbatim yields 'const PI' twice -> SyntaxError,
// so exactly ONE declaration is kept here (the top one).
const PI = 3.14159;

function areaCircle(r) {
  return 3.14159 * r * r;
}

function perimeterCircle(r) {
  return 2 * 3.14159 * r;
}
