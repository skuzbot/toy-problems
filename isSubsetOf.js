/*
Output: Boolean
Input: two arrays. both made of strings. one context and one input
Constrains/Conditions:

true if all of the elements in the first array are in the second 
false if not all of the elements in the first array are in the second 



Examples/Edge Cases:

['cat', 'dog', 'cow'] isSubsetOf ['dog', 'cow', 'fox', 'cat'] // true
['cat', 'dog', 'cow'] isSubsetOf ['dog', 'cow', 'fox'] // false


*/

const array1 = ['cat', 'cat', 'dog'];
const array2 = ['cat'];

//_____//_____First Submit_____\\_____\\                .

Array.prototype.isSubsetOf = a =>
  !this ? true : !a.includes(this[0]) ? false : this.slice(1).isSubsetOf(a);

//                                                                  \\.

console.log(array1.isSubsetOf(array2));
