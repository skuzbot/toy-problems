/*
Output:

Input:

Constrains/Conditions:
  Fill in your
  function to take the a variable, and
  return“ Welcome”
  if they are a appropriate(21 or over), “Go Away”
  if they are too young, and“ Stop Playing Around”
  if they give you and a above 100 or below 1. Remember the format of a basic
  if statement is as follows:

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
bouncer = a => a > 100 || a < 1 ? 'Stop Playing Around' : a >= 21 ? 'Welcome' : 'Go Away'

// -End of Code-                                                   ===

// given tests:

const input = 101;

console.log(bouncer(input));