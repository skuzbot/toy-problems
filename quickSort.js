//Output:
//  array sorted using quicksort
//Input:
//  unsorted array of numbers
//Constrains/Conditions:
//  
//Examples/Edge Cases:
//
//  Start of Code-                                                 ===

quickSort = (arr) => {

  if (!arr.length) {
    return [];
  }

  let pivot = arr[0];
  let lesser = [];
  let greater = [];
  
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  if (lesser.length > 1) {
    lesser = quickSort(lesser);
  }
  if (greater.length > 1) {
    greater = quickSort(greater);
  }
  
  return lesser.concat(pivot).concat(greater);

};

// -End of Code                                                    ===

// given tests:

let unsorted = [];

console.log(quickSort(unsorted));
