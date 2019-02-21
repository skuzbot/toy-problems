/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
nestedWordCount = (wordList) => {
  // console.log(wordList);
  const tuple = wordList.map(word => [0, word]);
  // console.log(tuple);
  for (let i = 0; i < tuple.length; i++) {
    for (let j = 1; j < tuple.length; j++) {
      let regex = RegExp(`${tuple[i][1]}`);

      if (regex.test(tuple[j][1])) {
        tuple[j][0]++;
      }
    }
  }
  // console.log(tuple)
  console.log(tuple.sort((a, b) => b[0] - a[0]));
  return tuple.sort((a, b) => b[0] - a[0])[0][1];
};
// -End of Code-                                                   ===

// given tests:

const input = ["ant", "anti", "antiparticle", "antiparty", "apart", "art", "arty", "disparted", "impart", "imparted", "interparticle", "interparty", "part", "parted", "party", "tip"]; // -> antiparty

// console.log(RegExp('gray*').test('grays'));
//antiparticle |||||
//antiparty

console.log(nestedWordCount(input));