class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    // Your code goes here
    let minStockPurchasePrice = prices[0] || 0
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minStockPurchasePrice) {
        minStockPurchasePrice = prices[i]
      }
      profit = Math.max(profit, prices[i] - minStockPurchasePrice)
    }

    return profit
  }
}
