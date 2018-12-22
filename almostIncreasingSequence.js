/*
Output:
boolean

Input:
array of numbers

Constrains/Conditions:

Return true if it is possible to remove one element from the array 
in order to get a strictly increasing seq, otherwise return false.

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
almostIncreasingSequence = (seq) => {
  let found = false;
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] <= seq[i - 1]) {
      if (found) {
        return false;
      }
      found = true;

      if (i === 1 || i + 1 === seq.length) {
        continue;
      } else if (seq[i] > seq[i - 2]) {
        seq[i - 1] = seq[i - 2];
      } else if (seq[i - 1] >= seq[i + 1]) {
        return false;
      }
    }
  }
  return true;
};
// -End of Code-                                                   ===

// given tests:

const input = [1, 3, 2, 1]; // false

console.log(almostIncreasingSequence(input));