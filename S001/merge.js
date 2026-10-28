// merged: both additions live at opposite ends of the file -> disjoint hunks,
// clean textual merge and no semantic interaction between the two constants.
const ABS_ZERO_F = -459.67;

function toCelsius(f) {
  return (f - 32) * 5 / 9;
}

const BOILING_F = 212;
