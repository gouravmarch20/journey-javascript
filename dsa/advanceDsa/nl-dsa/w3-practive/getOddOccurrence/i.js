const getOddOccurrence = (arr) => {
  // function
  let ans = 0
  for (const value of arr) {
    ans = ans ^ value
  }
  return ans
}

const arr = [1, 2, 3, 2, 3, 1, 3]
console.log(getOddOccurrence(arr));