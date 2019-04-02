/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:
https: //www.codewars.com/kata/counting-change-combinations/train/javascript

*/
const coins = [1, 2, 5, 10, 20, 50, 100, 200];
// -Start of Code-                                                 ===
coinSums = (total, coins) => {
  // intialize an array of zeros with indices up to total
  var waysOfDoingNcents = [];
  for (var i = 0; i <= total; i++) {
    waysOfDoingNcents[i] = 0;
  }
  // there is 1 way to renturn 0 cents
  waysOfDoingNcents[0] = 1;

  for (var j = 0; j < coins.length; j++) {
    // we can only start returning change with coins in our coins
    var coin = coins[j];

    // we start bottom up, each time reducing change amout with curr coin.
    for (var higherAmount = coin; higherAmount <= total; higherAmount++) {
      var higherAmountRemainder = higherAmount - coin;
      // ways to create change is equivalent to reducing the problem to a known problem
      // and gaining all the ways to solve for smaller problems
      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
    }
  }

  return waysOfDoingNcents[total];
};
// -End of Code-                                                   ===

// given tests:

const input = 17;

console.log(coinSums(input, coins));