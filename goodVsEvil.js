/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
goodVsEvil = (good, evil) => {
  let g = good.split(' ').reduce((a, c) => parseInt(a) + parseInt(c));
  let e = evil.split(' ').reduce((a, c) => parseInt(a) + parseInt(c));
  return g > e ? 'Battle Result: Good triumphs over Evil' : 
    e > g ? 'Battle Result: Evil eradicates all trace of Good'
      : 'Battle Result: No victor on this battle field';
};
// -End of Code-                                                   ===

// given tests:

// const good = '1 1 1 1 1 1';
// const bad = '1 1 1 1 1 1 1'; // evil
const good = '0 0 0 0 0 10';
const bad = '0 1 1 1 1 0 0'; // good
 


console.log(goodVsEvil(good, bad));