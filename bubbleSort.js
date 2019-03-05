//Output: an array of numbers that are sorted numerically
//Input: an array of numbers
//Constrains/Conditions:
//  must use bubble sort
//Examples/Edge Cases:
//  [ 20, -10, -10, 2, 4, 299 ] => [ -10, -10, 2, 4, 20, 299 ]
//  Start of Code-                                                 ===
bubbleSort = (input) => {
  let swapped = false;
  for (i = 0; i < input.length; i++) {
    for (j = 1; j < input.length; j++) {
      if (input[j] < input[j - 1]) {
        let bubble = input[j - 1];
        input[j - 1] = input[j];
        input[j] = bubble;
        // if (input[j - 1] < input[j - 2]) {
        //   j -= 2;
        // }
      }
    }
  }
  return input;
};

// -End of Code                                                    ===
// given tests:

const bub = [2, 2, 2, 2, 2, 22, 2, 2, 222, 2222, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22];
//const bub = [22, 2, 2];

console.log(bubbleSort(bub));
