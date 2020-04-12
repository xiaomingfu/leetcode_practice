// give an array of prices, index is the day, each element is the price
// return the maximum profit from buy and sell one share of the stock multiple times
var maxProfit = function (prices) {
  let i = 0;
  let j = 1;
  let max = 0;
  while (j < prices.length) {
    if (prices[i] > prices[j]) {
      i++;
      j++;
    } else {
      let diff = prices[j] - prices[i];
      max = max + diff;
      j++;
    }
  }
  return max;
};
