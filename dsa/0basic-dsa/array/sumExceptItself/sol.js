const findSum = (curr, arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (i === curr) {
      continue
    }
    sum += arr[i]
  }
  return sum
}

function sumExceptItself(arr) {
  let ans = []
  for (let i = 0; i < arr.length; i++) {
    ans[i] = findSum(i, arr)
  }
  return ans
}

console.log(sumExceptItself([2, 7, 11, 4, -2]))
