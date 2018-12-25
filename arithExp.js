/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:


*/
// -Start of Code-                                                 ===
arithmeticExpression = (a, b, c) => {
  if (a + b === c) {
    return true;
  } else if (a - b === c) {
    return true;
  } else if (a * b === c) {
    return true;
  } else if (a / b === c) {
    return true;
  } else {
    return false;
  }
};
// -End of Code-                                                   ===

// given tests:

const a = 1;
const b = 3;
const c = 5;


console.log(arithmeticExpression(a, b, c));