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
  if (grid === [] || !grid) {
    return 0;
  }
  const gHeight = grid.length;
  const gWidth = grid[0].length;
  let longest = 0;
  let tempLongest = 0;

  //clones grid to perserve grid in memeory
  const cloneGrid = g => g.map(a => [...a]);
  let gridClone = cloneGrid(grid);
  
  //checks if next index is in grid bounds
  const isOnGrid = (r, c, w, h) => ((r >= 0 && r < w) && (c >= 0 && c < h));
  
  //checks if value we're looking at and next value has a diff > 3 and is on grid
  const hasValidDiff = (val, r, c, grid) => {
    if (!isOnGrid(r, c, gWidth, gHeight)) {
      return null;
    }
    let nextVal = grid[r][c];

    return Math.abs(val - nextVal) > 3;
  };

  //dictionary for accessing what moves are possible from each cell
  let validMoves = {};

  //build out what moves are valid for each cell
  for (let i = 0; i < gHeight; i++) {
    for (let j = 0; j < gWidth; j++) {
      let curValue = grid[i][j];
      validMoves[`${i}${j}`] = {
        row: i,
        col: j,
        val: gridClone[i][j],
        moves: [
          [
            //northwest
            gHeight > 1 ? hasValidDiff(curValue, i - 1, j - 1, gridClone) : false,
            //north
            gHeight > 1 ? hasValidDiff(curValue, i - 1, j, gridClone) : false,
            //northeast
            gHeight > 1 ? hasValidDiff(curValue, i - 1, j + 1, gridClone) : false
          ],
          [
            //west
            gWidth > 1 ? hasValidDiff(curValue, i, j - 1, gridClone) : false,
            //own cell
            null,
            //east
            gWidth > 1 ? hasValidDiff(curValue, i, j + 1, gridClone) : false
          ],
          [
            //southwest
            gHeight > 1 ? hasValidDiff(curValue, i + 1, j - 1, gridClone) : false,
            //south
            gHeight > 1 ? hasValidDiff(curValue, i + 1, j, gridClone) : false,
            //southeast
            gHeight > 1 ? hasValidDiff(curValue, i + 1, j + 1, gridClone) : false
          ]
        ]
      };
    }
  }

  //marks current cell as seen
  const markCellSeen = (r, c, g) => g[r][c] = 'NaN';

  let recurseCount = 0;
  const gridRecurse = (cords, depth, curGrid) => {
    recurseCount++;
    let r = cords[0];
    let c = cords[1];
    let curCell = curGrid[r][c];

    //checking to make sure current cell is an int
    let curDepth = (!isNaN(curCell) && curCell !== null && curCell !== '') ? depth + 1 : depth;
    let deepestMoves = [];
    let deepestMove = 0;
    let nextMoves = [];
    
    markCellSeen(r, c, curGrid);

    if (curCell === 'NaN') {
      return 0;
    }


    //northwest
    if (validMoves[`${r}${c}`].moves[0][0] && curGrid[r - 1][c - 1] !== 'NaN') {
      nextMoves.push([r - 1, c - 1]);
    }
    //north
    if (validMoves[`${r}${c}`].moves[0][1] && curGrid[r - 1][c] !== 'NaN') {
      nextMoves.push([r - 1, c]);
    }
    //northeast
    if (validMoves[`${r}${c}`].moves[0][2] && curGrid[r - 1][c + 1] !== 'NaN') {
      nextMoves.push([r - 1, c + 1]);
    }
    //southwest
    if (validMoves[`${r}${c}`].moves[2][0] && curGrid[r + 1][c - 1] !== 'NaN') {
      nextMoves.push([r + 1, c - 1]);
    }
    //south
    if (validMoves[`${r}${c}`].moves[2][1] && curGrid[r + 1][c] !== 'NaN') {
      nextMoves.push([r + 1, c]);
    }
    //southeast
    if (validMoves[`${r}${c}`].moves[2][2] && curGrid[r + 1][c + 1] !== 'NaN') {
      nextMoves.push([r + 1, c + 1]);
    }
    //east
    if (validMoves[`${r}${c}`].moves[1][2] && curGrid[r][c + 1] !== 'NaN') {
      nextMoves.push([r, c + 1]);
    }
    //west
    if (validMoves[`${r}${c}`].moves[1][0] && curGrid[r][c - 1] !== 'NaN') {
      nextMoves.push([r, c - 1]);
    }
    // console.log('nextMoves with curCell :', curCell, nextMoves);
    // basecase
    if (nextMoves.length === 0) {
      return curDepth;
    }

    //takes all valid cords and maps the value of the deepest sequence found then sorts for easy access to deepest depth
    //this is to check for forks in the road that I need to backtrack to
    if (nextMoves.length > 1) {
      deepestMove = nextMoves.reduce((prev, cord) => {
        //create temp grid to reset seen cells in recursion branches
        let tempGrid = cloneGrid(curGrid);
        curDeepest = gridRecurse(cord, curDepth, tempGrid);
        return prev > curDeepest ? prev : curDeepest;
      }, 0);
    } else {
      deepestMove = gridRecurse(nextMoves[0], curDepth, curGrid);
    }
    curDepth = deepestMove > curDepth ? deepestMove : curDepth;
    return curDepth;
  };
  
  for (let i = 0; i < gHeight; i++) {
    for (let j = 0; j < gWidth; j++) {
      // reset grid and counter;
      tempLongest = 0;
      gridClone = cloneGrid(grid);

      //recurse for temp longest
      tempLongest = gridRecurse([i, j], 0, gridClone);

      //check temp longest against longest
      longest = tempLongest > longest ? tempLongest : longest;
    }
  }
  // console.log(recurseCount);
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
// const test0Expected = 8;


// const test1 = [
//   [1, 6, 2],
//   [8, 3, 7],
//   [4, 9, 5]
// ]; 
// const test1Result = longestSequence(test1);
// const test1Expected = 9;


// const test2 = [
//   [4, 2, 4],
//   [0, 3, 1],
//   [3, 7, 9]
// ];
// const test2Result = longestSequence(test2);
// const test2Expected = 6;


// const test3 = [
//   [4],
//   [0],
//   [3]
// ];
// const test3Result = longestSequence(test3);
// const test3Expected = 2;


// const test4 = [
//   [4]
// ];
// const test4Result = longestSequence(test4);
// const test4Expected = 1;


// const test5 = [
//   [4, 0, 3]
// ];
// const test5Result = longestSequence(test5);
// const test5Expected = 2;


// const test6 = [
//   []
// ];
// const test6Result = longestSequence(test6);
// const test6Expected = 0;


// const test7 = [
//   ['a', 'b', 'c'],
//   ['r', 'v', 'd'],
//   ['c', 'o', 'p']
// ];
// const test7Result = longestSequence(test7);
// const test7Expected = 0;


// const test8 = [
//   ['', , ''],
//   ['', , undefined],
//   ['', , null]
// ];
// const test8Result = longestSequence(test8);
// const test8Expected = 0;


// const test9 = [ 
//   [ 0, 8, 0, 8, 7, 5, 3, 8, 1, 4 ],
//   [ 3, 3, 3, 4, 8, 2, 4, 0, 1, 6 ],
//   [ 2, 5, 6, 4, 7, 7, 3, 1, 5, 3 ],
//   [ 2, 6, 2, 5, 3, 5, 7, 3, 2, 0 ],
//   [ 4, 7, 8, 1, 5, 1, 1, 5, 2, 0 ],
//   [ 5, 8, 1, 0, 0, 4, 3, 0, 8, 3 ],
//   [ 1, 8, 4, 3, 0, 0, 8, 2, 6, 6 ],
//   [ 7, 3, 8, 6, 3, 8, 4, 5, 7, 6 ],
//   [ 1, 7, 4, 2, 8, 1, 2, 4, 4, 8 ],
//   [ 2, 2, 8, 8, 2, 5, 8, 1, 8, 4 ] 
// ];
// const test9Result = longestSequence(test9);


const test10 = [ 
  [ 6, 2, 4, 1, 2, 5, 4, 4 ],
  [ 7, 6, 4, 5, 1, 5, 2, 5 ],
  [ 7, 2, 2, 1, 2, 4, 6, 3 ],
  [ 0, 0, 8, 8, 4, 0, 1, 8 ],
  [ 1, 7, 0, 2, 6, 3, 7, 6 ],
  [ 7, 8, 5, 4, 7, 5, 4, 0 ],
  [ 4, 6, 0, 6, 2, 0, 1, 2 ],
  [ 5, 7, 0, 3, 3, 6, 0, 5 ] 
];

const t1 = Date.now();
const test10Result = longestSequence(test10);
const t2 = Date.now();
console.log(t2 - t1, 'ms');
const test10Expected = 0;


/*
! edge cases to check:
// ! no numbers in matrix
// ! empty cells in matrix (one or all)
// ! only checking r < 4 and c < 4 so far
! cell numbers < 0 and > 9
! error in hasValidDiff
! we're not catching a row or column somehow.. not sure about that
*/


// console.log('******* Test 0 Longest Sequence is: ', test0Result);
// console.log('******* Test is equal *+*+*+*', test0Result === test0Expected);
// console.log('\n');
// console.log('******* Test 1 Longest Sequence is: ', test1Result);
// console.log('******* Test is equal *+*+*+*', test1Result === test1Expected);
// console.log('\n');
// console.log('******* Test 2 Longest Sequence is: ', test2Result);
// console.log('******* Test is equal *+*+*+*', test2Result === test2Expected);
// console.log('\n');
// console.log('******* Test 3 Longest Sequence is: ', test3Result);
// console.log('******* Test is equal *+*+*+*', test3Result === test3Expected);
// console.log('\n');
// console.log('******* Test 4 Longest Sequence is: ', test4Result);
// console.log('******* Test is equal *+*+*+*', test4Result === test4Expected);
// console.log('\n');
// console.log('******* Test 5 Longest Sequence is: ', test5Result);
// console.log('******* Test is equal *+*+*+*', test5Result === test5Expected);
// console.log('\n');
// console.log('******* Test 6 Longest Sequence is: ', test6Result);
// console.log('******* Test is equal *+*+*+*', test6Result === test6Expected);
// console.log('\n');
// console.log('******* Test 7 Longest Sequence is: ', test7Result);
// console.log('******* Test is equal *+*+*+*', test7Result === test7Expected);
// console.log('\n');
// console.log('******* Test 8 Longest Sequence is: ', test8Result);
// console.log('******* Test is equal *+*+*+*', test8Result === test8Expected);
// console.log('\n');
// console.log('******* Test 9 Longest Sequence is: ', test9Result);
// console.log('******* Test is equal *+*+*+*', test9Result === test9Expected);
// console.log('\n');
console.log('******* Test 10 Longest Sequence is: ', test10Result);
console.log('******* Test is equal *+*+*+*', test10Result === test10Expected);
console.log('\n');

