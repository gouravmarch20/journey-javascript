// reduceRight from right to left , rest similar to reduce
const arr = ['a', 'b', 'c', 'd']
const result = arr.reduceRight((acc, currV) => {
  return acc + currV
}, '')
console.log(result)
