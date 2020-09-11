/* 
Say you have an array prices for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
*/
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    result = result + Math.max(0, prices[i] - prices[i - 1]);
  }
  return result;
};

console.log(maxProfit([6, 7, 3, 2, 6, 8]));
