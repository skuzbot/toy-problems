/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
charSum = (s) => {
  s = s.replace(/[^\d]/g, '');
  return s.split``.reduce((a, c) => {
    return a += parseInt(c);
  }, 0);
};
// -End of Code-                                                   ===

// given tests:

const input = 'so coo2l!!1!';

console.log(charSum(input));