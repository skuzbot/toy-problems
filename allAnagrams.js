/*
Output:
  array of all anagrams

Input:
  string

Constrains/Conditions:
  none

Examples/Edge Cases:
  'abc' -> ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

*/
// -Start of Code-
allAnagrams = (str, out = [], arr = str.split``) => {

  //inner recursive permutatin function
  (perm = (arr, acc = []) => {
    //loops arr length
    for (let i = 0; i < arr.length; i++) {
      //cur - base single char at index i that perm will be built on | i = 0 [a, b, c] -> a | i = 1 [a, b, c] -> b | etc...
      let cur = arr.splice(i, 1);
      //if we've gone through the whole array we push the acc to output | acc = [abc], arr = [] |
      if (!arr.length) {
        out.push(acc.concat(cur).join``);
      }
      //recurse on a copy of the array and the accumulator + current
      perm(arr.slice(), acc.concat(cur));
      //adds first char of cur back into array to be reused
      arr.splice(i, 0, cur[0]);
    }
  })(arr);

  //filters dups
  return out.filter((v, i, a) => a.indexOf(v) === i);
};
// -End of Code-

// tests:

const input = 'abc'; //[ "abc", "acb", "bac", "bca", "cab", "cba" ]

console.log(allAnagrams(input));
console.log(allAnagrams(input).length);