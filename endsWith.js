/*
Output:


Input:


Constrains/Conditions:


Examples/Edge Cases:


*/
//helper function

// -Start of Code-                                                 ===
solution = (str, ending) => str.substring(str.length - ending.length) === ending;

// -End of Code-                                                   ===

// given tests:

const input = 0;


console.log(solution('abcde', 'cde'));
console.log(solution('abcde', 'ade'));