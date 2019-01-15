/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
domainName = url => {
  const rgx = /^[http://'|'https://'|'http://www.'|'https://www.']+/;
  return url.replace(rgx, '').split('.')[0];
};
// -End of Code-                                                   ===

// given tests:

const input = 'http://www.github.com/carbonfive/raygun'; // -> github

console.log(domainName(input));