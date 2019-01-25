/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
const palindrome = (str) => {
  str = str.toLowerCase();
  str = str.replace(' ', '');
  console.log('str :', str);
  return (str.length <= 1) ? true :
    (str.charAt(0) === str.charAt(str.length - 1)) ? palindrome(str.substr(1, str.length - 2)) :
      false;
};

filterPalindromes = (w) => (w.filter(v => palindrome(v)));
// -End of Code-                                                   ===

// given tests:

const input = ['word', 'Ana', 'race car'];

console.log(filterPalindromes(input));