/*
Output:
  index of target in input array

Input:
array of sorted ints and search target number

Constrains/Conditions:
  cannot use Array.prototype.indexOf

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
binarySearch = (arr, tar) => {
  // declare start, stop, and middle indexes of array
  let start = 0;
  let stop = arr.length - 1;
  let mid = Math.floor((start + stop) / 2);

  //while mid != target and start and stop are not equal
  while (arr[mid] !== tar && start < stop) {
    if (tar < arr[mid]) {
      stop = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + stop) / 2);
  }

  return arr[mid] !== tar ? -1 : mid;
  
};
// -End of Code-                                                   ===

// given tests:

const array = [11, 12, 13, 14, 15, 16];

const target = 11;

console.log(binarySearch(array, target));