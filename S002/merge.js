// merged: the two trace lines live in different function bodies -> disjoint hunks.
// Trap avoided: near-identical debug strings look like a duplicated edit, but each
// one labels its own function and no observable behaviour changes.
function greet(name) {
  console.log('DEBUG: greet called');
  console.log('Hello, ' + name);
}

function farewell(name) {
  console.log('DEBUG: farewell called');
  console.log('Bye, ' + name);
}
