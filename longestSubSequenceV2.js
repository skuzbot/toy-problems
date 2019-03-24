/*
Problem:
Given grid of R (row) X C (column) grid of numbers find the longest sequence of numbers that
connect adjacently (including diagonals) where the difference of values is greater than 3

Output:
number of sequencial steps in matrix for adjacent numbers with greater than 3 difference

Input:
matrix of numbers

Constrains/Conditions:
Cells can not be repeated
Adjacent cells include diagonal spaces
1 <= R <= 10
1 <= C <= 10
! No constraints given about numbers in each cell

Examples/Edge Cases:


*/
//helper functions



// -Start of Code-                                                 ===
const longestSequence = (grid) => {
  const gHeight = grid.length;
  const gWidth = grid[0].length;
  let longest = 0;
  let tempLongest = 0;

  let foundMoves = {};

  
  //clones grid to perserve grid in memeory
  const cloneGrid = g => g.map(a => a.slice());
  let gridClone = cloneGrid(grid);

  //checks if next index is in grid bounds
  const isOnGrid = (r, c, w, h) => ((r >= 0 && r < w) && (c >= 0 && c < h));

  //checks if value we're looking at and next value has a diff > 3 and is on grid
  const hasValidDiff = (val, r, c, grid) => {
    if (!isOnGrid(r, c, gWidth, gHeight)) {
      return false;
    }
    let nextVal = grid[r][c];

    return Math.abs(val - nextVal) > 3;
  };

  //marks current cell as seen
  const markCellSeen = (r, c, g) => g[r][c] = '✓';

  const gridRecurse = (cords, depth, curGrid) => {
    // ? is this check needed?
    curGrid = curGrid || gridClone;
    let r = cords[0];
    let c = cords[1];
    let curCell = gridClone[r][c];
    //checking to make sure current cell is an int
    let curDepth = (!isNaN(curCell) && curCell !== '' && curCell !== null) ? depth + 1 : depth;
    let curLongest = 0;
    let nextMoves = [];
    let deepestMoves = [];
    let deepestMove = 0;

    markCellSeen(r, c, curGrid);

    // ? seen cells are sneaking in
    if (curCell === '✓') {
      return 0;
    }

    //check for single row edge-case
    if (gHeight > 1) {
      //south
      if (hasValidDiff(curCell, r + 1, c, curGrid)) {
        nextMoves.push([r + 1, c]);
      }
      //southwest
      if (hasValidDiff(curCell, r + 1, c - 1, curGrid)) {
        nextMoves.push([r + 1, c - 1]);
      }
    }
    
    //check for single column edge-case
    if (gWidth > 1) {
      //northeast
      if (hasValidDiff(curCell, r - 1, c + 1, curGrid)) {
        nextMoves.push([r - 1, c + 1]);
      }
      //east
      if (hasValidDiff(curCell, r, c + 1, curGrid)) {
        nextMoves.push([r, c + 1]);
      }
    }
    
    //check for single cell edge case
    if (gHeight > 1 && gWidth > 1) {
      //southeast
      if (hasValidDiff(curCell, r + 1, c + 1, curGrid)) {
        nextMoves.push([r + 1, c + 1]);
      }
    }

    //north
    if (hasValidDiff(curCell, r - 1, c, curGrid)) {
      nextMoves.push([r - 1, c]);
    }
    //west
    if (hasValidDiff(curCell, r, c - 1, curGrid)) {
      nextMoves.push([r, c - 1]);
    }
    //northwest
    if (hasValidDiff(curCell, r - 1, c - 1, curGrid)) {
      nextMoves.push([r - 1, c - 1]);
    }

    // basecase
    if (nextMoves.length === 0) {
      return curDepth;
    }

    //takes all valid cords and maps the value of the deepest sequence found then sorts for easy access to deepest depth
    //this is to check for forks in the road where I need to return
    if (nextMoves.length > 1) {
      deepestMoves = nextMoves.map((cord, i) => {
        //create temp grid to reset seen cells in recursion branches
        let tempGrid = cloneGrid(curGrid);
        return gridRecurse(cord, curDepth, tempGrid);
      }).sort((a, b) => b - a);
      deepestMove = deepestMoves[0];
    } else {
      deepestMove = gridRecurse(nextMoves[0], curDepth, curGrid);
    }
    curLongest = Math.max(deepestMove, curLongest);
    return curLongest;
  };
  
  for (let i = 0; i < gHeight; i++) {
    for (let j = 0; j < gWidth; j++) {
      // reset grid and counter;
      tempLongest = 0;
      gridClone = cloneGrid(grid);

      //recurse for temp longest
      tempLongest = gridRecurse([i, j], 0, gridClone);

      //check temp longest against longest
      longest = Math.max(tempLongest, longest);
    }
  }

  return longest;
};
// -End of Code-                                                   ===

// given tests:

// const test0 = [
//   [8, 2, 4],
//   [0, 6, 1],
//   [3, 7, 9]
// ];

// const test0Result = longestSequence(test0);

// const test0Output = 8;

// const test1 = [
//   [1, 6, 2],
//   [8, 3, 7],
//   [4, 9, 5]
// ]; 

// const test1Result = longestSequence(test1);

// const test1Output = 9;

// const test2 = [
//   [4, 2, 4],
//   [0, 3, 1],
//   [3, 7, 9]
// ];

// const test2Result = longestSequence(test2);

// const test2Output = 6;

// const test3 = [
//   [4],
//   [0],
//   [3]
// ];

// const test3Result = longestSequence(test3);

// const test3Output = 2;

// const test4 = [
//   [4]
// ];

// const test4Result = longestSequence(test4);

// const test4Output = 1;

// const test5 = [
//   [4, 0, 3]
// ];

// const test5Result = longestSequence(test5);

// const test5Output = 2;


// const test6 = [
//   []
// ];

// const test6Result = longestSequence(test6);

// const test6Output = 0;

// const test7 = [
//   ['a', 'b', 'c'],
//   ['r', 'v', 'd'],
//   ['c', 'o', 'p']
// ];

// const test7Result = longestSequence(test7);

// const test7Output = 0;

// const test8 = [
//   ['', , ''],
//   ['', , undefined],
//   ['', , null]
// ];

// const test8Result = longestSequence(test8);

// const test8Output = 0;

const test9 = [ 
  [ 0, 8, 0, 8, 7, 5, 3, 8, 1, 4 ],
  [ 3, 3, 3, 4, 8, 2, 4, 0, 1, 6 ],
  [ 2, 5, 6, 4, 7, 7, 3, 1, 5, 3 ],
  [ 2, 6, 2, 5, 3, 5, 7, 3, 2, 0 ],
  [ 4, 7, 8, 1, 5, 1, 1, 5, 2, 0 ],
  [ 5, 8, 1, 0, 0, 4, 3, 0, 8, 3 ],
  [ 1, 8, 4, 3, 0, 0, 8, 2, 6, 6 ],
  [ 7, 3, 8, 6, 3, 8, 4, 5, 7, 6 ],
  [ 1, 7, 4, 2, 8, 1, 2, 4, 4, 8 ],
  [ 2, 2, 8, 8, 2, 5, 8, 1, 8, 4 ] 
];

const test9Result = longestSequence(test9);

const test9Output = 0;

/*
! edge cases to check:
// ! no numbers in matrix
! empty cells in matrix (one or all)
! only checking r < 4 and c < 4 so far
! cell numbers < 0 and > 9
! error in hasValidDiff
! we're not catching a row or column somehow.. not sure about that
*/


// console.log('******* Test Longest Sequence is: ', test0Result);
// console.log('******* Test is equal *+*+*+*', test0Result === test0Output);
// console.log('\n');
// console.log('******* Test Longest Sequence is: ', test1Result);
// console.log('******* Test is equal *+*+*+*', test1Result === test1Output);
// console.log('\n');
// console.log('******* Test Longest Sequence is: ', test2Result);
// console.log('******* Test is equal *+*+*+*', test2Result === test2Output);
// console.log('\n');
// console.log('******* Test Longest Sequence is: ', test3Result);
// console.log('******* Test is equal *+*+*+*', test3Result === test3Output);
// console.log('\n');
// console.log('******* Test Longest Sequence is: ', test4Result);
// console.log('******* Test is equal *+*+*+*', test4Result === test4Output);
// console.log('\n');
// console.log('******* Test Longest Sequence is: ', test5Result);
// console.log('******* Test is equal *+*+*+*', test5Result === test5Output);
// console.log('\n');
// console.log('******* Test Longest Sequence is: ', test6Result);
// console.log('******* Test is equal *+*+*+*', test6Result === test6Output);
// console.log('\n');
// console.log('******* Test Longest Sequence is: ', test7Result);
// console.log('******* Test is equal *+*+*+*', test7Result === test7Output);
// console.log('\n');
// console.log('******* Test Longest Sequence is: ', test8Result);
// console.log('******* Test is equal *+*+*+*', test8Result === test8Output);
// console.log('\n');
console.log('******* Test Longest Sequence is: ', test9Result);
console.log('******* Test is equal *+*+*+*', test9Result === test9Output);
console.log('\n');

