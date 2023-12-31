const secondLargestNo = (input) => {
  let arr = [...new Set(input.sort((a, b) => a - b))]
  return arr[arr.length - 2]
}
const input = [1, 2, -2, 11, 7, 7, 11]
const input1 = [1, 2, 9, 11]

console.log(secondLargestNo(input))
console.log(secondLargestNo(input1))
