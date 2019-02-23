/*
Output:

Input:

Constrains/Conditions:

Consider integer numbers from 0 to n - 1 written down along the circle 
in such a way that the distance between any two neighboring numbers is
equal(note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially 
opposite position to firstNumber.

Examples/Edge Cases:

For n = 10 and firstNumber = 2, the output should be
circleOfNumbers(n, firstNumber) = 7

*/
// -Start of Code-                                                 ===

circleOfNumbers = (n, fn) => (
  n - fn > fn ? n / 2 + fn : fn - n / 2
);


// -End of Code-                                                   ===

// given tests:
const n = 10;
const firstNumber = 2;


console.log(circleOfNumbers(n, firstNumber));
