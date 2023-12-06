const stockPrice = [7, 1, 5, 3, 6, 4]

const maxProfitMade = prices => {
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
console.log(maxProfitMade(stockPrice))
