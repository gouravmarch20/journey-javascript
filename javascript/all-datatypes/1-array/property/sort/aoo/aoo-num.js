const arr = [
  { name: 'jublianfoods', price: 612, category: 'advanced' },
  { name: 'itc', price: 281, category: 'advanced' },
  { name: 'vip', price: 540, category: 'advanced' },
  { name: 'vbl', price: 700, category: 'advanced' },
  { name: 'princepipe', price: 670, category: 'advanced' },
  { name: 'irfc', price: 21, category: 'advanced' }
]
const sortArrayAscending = () => {
  const sort = arr.sort((stockNameOne, stockNameTwo) => {
    return stockNameOne.price - stockNameTwo.price
  })
  return sort
}
const sortArrayDecending = () => {
  const sort = arr.sort((stockNameOne, stockNameTwo) => {
    return stockNameTwo.price - stockNameOne.price
  })
  return sort
}
console.log(sortArrayAscending())
console.log(sortArrayDecending())
