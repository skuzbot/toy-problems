/*
Output:


Input:


Constrains/Conditions:


Examples/Edge Cases:


*/
//helper function

// -Start of Code-                                                 ===
deleteDigit = (n) => {
  let highest = 0;
  let numLength = ('' + n).length;
  let numArray = ('' + n).split``;

  for (let i = 0; i < numLength; i++) {
    let tempArr = numArray.slice();
    tempArr.splice(i, 1);
    
    if (tempArr.join`` > highest) {
      highest = parseInt(tempArr.join``);
    }
  }
  return parseInt(highest);
};
// -End of Code-                                                   ===

// given tests:

const input = 1001;


console.log(deleteDigit(input));