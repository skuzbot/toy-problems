/*
Output:


Input:


Constrains/Conditions:


Examples/Edge Cases:


*/
//helper function

// -Start of Code-                                                 ===
fizzBuzz = n => {
  const a = [];
  let i = 1;
  while (i <= n) {
    a.push(i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i);
    i++;
  }
  return a;
};
// -End of Code-                                                   ===

// given tests:

const input = 15;


console.log(fizzBuzz(input));