/*
Output:
  number of cheesesticks

Input:
  number of fellows

Constrains/Conditions:
  Calculate the number of cheese sticks required to feed X amount of fellows.

  Every fellow needs 2 cheese sticks minimum.For every 5 fellows, an additional cheese stick is required per fellow.

Examples/Edge Cases:
  3 fellows - > 6 cheese sticks(which would be 2 sticks per fellow)

  5 fellows - > 15 cheese sticks(which would be 3 sticks per fellow)

  17 fellows - > 85 cheese sticks(which would be 5 sticks per fellow)

*/
// -Start of Code-                                                 ===
cheeseStickConsumption = (n) => {
  let neededCheese = 2;
  let m = n;
  while (m > 0) {
    if (m >= 5) {
      neededCheese += 1;
    }
    m -= 5;
  }
  return n * neededCheese;
};
// -End of Code-                                                   ===

// given tests:

const input = 5;

console.log(cheeseStickConsumption(input));