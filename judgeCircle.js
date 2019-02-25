/*
Output:


Input:


Constrains/Conditions:


Examples/Edge Cases:


*/
//helper function

// -Start of Code-                                                 ===
judgeCircle = (moves) => {
  let dict = {
    U: 0,
    D: 0,
    L: 0,
    R: 0,
  };
  for (let i = 0; i < moves.length; i++) {
    dict[moves[i]]++;
  }
  return dict.U === dict.D && dict.L === dict.R;
};
// -End of Code-                                                   ===

// given tests:

const input = 'UD';


console.log(judgeCircle(input));