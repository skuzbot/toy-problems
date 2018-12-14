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
// -Start of Code-                                                 ===
allAnagrams = (str, o = [], f = {}, c = str.split``) => {

  eliminate = (el, arr) => {
    let i = arr.indexOf(el);
    arr.splice(i, 1);
    return arr;
  };

  (perm = (arr, len, acc = []) => {
    len = len || arr.length;
    if (acc.length === len) {
      let perm = acc.join``;
      if (!f[perm]) {
        f[perm] = true;
        o.push(perm);
      }
    } else {
      for (let el of arr) {
        let newAcc = [...acc];
        let newArr = eliminate(el, [...arr]);
        newAcc.push(el);
        perm(newArr, len, newAcc);
      }
    }
  })(c);

  return o;
};

// -End of Code-                                                   ===

// given tests:

const input = 'abc'; //[ "abc", "acb", "bac", "bca", "cab", "cba" ]

console.log(allAnagrams(input));