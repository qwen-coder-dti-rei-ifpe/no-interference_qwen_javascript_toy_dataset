let ready = false;

function stepOne() { console.log('one'); }
function stepTwo() { console.log('two'); }

stepTwo(); // left swapped the two calls
stepOne();
