const stockPrice = [1, 2]
const maxProfitMade = arr => {
  let maxProfit = 0
  for (let i = 0; i < arr.length - 1; i++) {
    const e1 = arr[i]
    for (let j = i + 1; j < arr.length ; j++) {
      const e2 = arr[j]
      const currentProfit = e2 - e1
      if (maxProfit < currentProfit) {
        maxProfit = currentProfit
      }
    }
  }
  return maxProfit
}
console.log(maxProfitMade(stockPrice))
