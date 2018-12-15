/*
Output:
array of longest string(s)

Input:
array of strings

Constrains/Conditions:

Examples/Edge Cases:

*/

// -Start of Code-                                                 ===
allLongestStrings = (a, m) => {
  m = a.sort((a, b) => b.length - a.length)[0].length;
  return a.filter(e => e.length === m);
};
// -End of Code-                                                   ===

// given tests:

const input = ['aba', 'aa', 'ad', 'vcd', 'aba'];

console.log(allLongestStrings(input));