const getProfit = (CP, SP) => {
	const profit = SP - CP
	if(profit >= 0)
		return `${profit} Profit`
	else
		return `${-1*profit}`
}
const a = getProfit(2500,2000)
console.log(a > 3 );