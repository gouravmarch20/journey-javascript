
// m1 -> j !== 0 , in 0 case arr[0] + arr[0] ==> false pair give
const findPair = (arr, target) => {
  //   let num1, num2
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] + arr[i] === target) {
        return `the pair is ${arr[i]}  ${arr[j]} `
      }
    }
  }
  return []// no pair found
}
console.log(findPair([1, 8, 7, 8, 7, 3], 10))
