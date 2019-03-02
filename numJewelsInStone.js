/*
Output:


Input:


Constrains/Conditions:


Examples/Edge Cases:


*/
//helper function

// -Start of Code-                                                 ===
numJewelsInStones = (j, s) => {
  let count = 0;
  const jewels = j.split``;
  for (let i = 0; i < s.length; i++) {
    if (jewels.includes(s[i])) {
      count++;
    }
  }
  return count;
};
// -End of Code-                                                   ===

// given tests:

const input1 = 'aA';
const input2 = 'aAAbbbb';


console.log(numJewelsInStones(input1, input2));