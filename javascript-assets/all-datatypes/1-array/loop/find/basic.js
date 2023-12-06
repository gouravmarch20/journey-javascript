const isOdd = (element, index, array) => {
  return element % 2 === 1
}
console.log([4, 9, 5, 10].find(isOdd))
console.log([4, 10].find(isOdd))
