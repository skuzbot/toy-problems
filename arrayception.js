//Output:
//  number of depth of deepest nested non-array value
//Input:
//  array containing nested arrays
//Constrains/Conditions:
//
//Examples/Edge Cases:
//
//  Start of Code-                                                 ===
fun = arrayception = array => {

  let maxDepth = 1;
  let depth;

  array.forEach(el => {
    if (el.length === 0) {
      depth = 1;
    } else if (Array.isArray(el)) {
      depth = arrayception(el);
      if (depth > 0) {
        depth++;
      }
    } else {
      depth = 1;
    }
    if (depth > maxDepth) {
      maxDepth = depth;
    }
  });
  return maxDepth;
};

// -End of Code                                                    ===
// given tests:

const test = []; // => 2
// const test = [ [ [ ] ] ]; // => 0

console.log(fun(test));
