//Output:
//
//Input:
//
//Constrains/Conditions:
/*
each child (n) wants to eat as much of the candy (m) as possible, but each must eat the same as each other child. n=3 m=10 => output 9. n
*/
//Examples/Edge Cases:
/*

*/
//  Start of Code-                                                 ===

seatsInTheater = (nCols, nRows, col, row) => {
  return (nCols - col + 1) * (nRows - row);
};

// -End of Code                                                    ===

// given tests:
let nCols = 16;
let nRows = 11;
let col = 5;
let row = 3;


console.log(seatsInTheater(nCols, nRows, col, row)); // 96
