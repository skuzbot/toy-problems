/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
isBalanced = (s) => {
  //stack method
  // const stack = [];
  // for (let char in s) {
  //   if (char === '(') {
  //     stack.push(char);
  //   } else if (char === ')') {
  //     if (stack.pop() !== '(') {
  //       return false;
  //     }
  //   }
  // }
  // return !stack.length;
  
  //regex method
  rx1 = /[^\(\)]/g;
  rx2 = /\(\)/g;
  s = s.replace(rx1, '');
  for (let i = 0; i < s.length + 1; i += 0.5) {
    s = s.replace(rx2, '');
  }
  return s === '' || s === '()' ? true : false;
};
// -End of Code-                                                   ===

// given tests:

const input = '((((((((((1)2)3)4)5)6)7)8)9)0)';

console.log(isBalanced(input));