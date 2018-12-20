/*
Output:
  boolean indicating if inputs are anagrams
Input:
  two strings
Constrains/Conditions:
  Case sensitive. Spaces are not considered.
Examples/Edge Cases:
a:
  "silent"
b:
  "listen" -> true

a:
  "torchwood"
b:
  "doctor who" -> true

a:
  "why?"
b:
  "why not?" -> false

*/
// -Start of Code-                                                 ===

isAnagram = (a, b) => {

  // a = a.replace(' ', '').split``.sort();
  // b = b.replace(' ', '').split``.sort();
  // for (let i = 0; i < Math.max(a.length, b.length); i++) {
  //   if (a[i] !== b[i]) {
  //     return false;
  //   }
  // }
  // return true;

  const formatString = (s) => {
    return s.replace(' ', '').split``.sort().join``;
  };
  return formatString(a) === formatString(b);
};
// -End of Code-                                                   ===

// given tests:

const a = 'silent';
const b = 'listen';

console.log(isAnagram(a, b));