/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
alphabetPosition = text => text = text.toLowerCase().replace(/[^a-z]/gi, '').split('').map(char => char = char.charCodeAt(0) - 96).join(' ');
// -End of Code-                                                   ===

// given tests:

const input = 'The sunset sets at twelve o\' clock.';

console.log(alphabetPosition(input));
// [ 20, 8, 5, 19, 21, 14, 19, 5, 20, 19, 5, 20, 19, 1, 20, 20, 23, 5, 12, 22, 5, 15, 3, 12, 15, 3, 11 ]