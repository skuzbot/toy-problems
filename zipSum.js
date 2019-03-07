/*
Output:
  Array with sums of index n of input arrays

Input:
  two arrays with numbers

Constrains/Conditions:
  output length is same as shortest input array

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
zipSum = (x, y, o = []) => {
  y.map((_, i) => o.push(y[i] + x[i]));
  return o.slice(0, x.length);
};
// -End of Code-                                                   ===

// given tests:

const x = [10, 20];
const y = [1, 2, 3];

console.log(zipSum(x, y));