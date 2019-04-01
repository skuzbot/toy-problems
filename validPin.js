/*
Output:

Input:

Constrains/Conditions:
4 or 6 numbers only
Examples/Edge Cases:


*/
// -Start of Code-                                                 ===
validatePIN = pin => (
  pin.length !== 4 ? false : pin.length !== 6 ? false : !!pin.match(/\d/g) ? false : true
);
// -End of Code-                                                   ===

// given tests:

const input = 1234;

const test = !!input.match(/\d/g);

console.log('test', test);

console.log(validatePIN(input));

