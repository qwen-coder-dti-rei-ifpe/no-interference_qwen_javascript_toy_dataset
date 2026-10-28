// merged: right's new declaration (top) and left's re-ordering (bottom) touch
// disjoint lines. No interference: neither step reads what the other writes, so
// swapping their order cannot change either outcome.
let ready = false;
let verbose = true;

function stepOne() { console.log('one'); }
function stepTwo() { console.log('two'); }

stepTwo();
stepOne();
