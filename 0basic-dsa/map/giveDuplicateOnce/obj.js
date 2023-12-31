//* O(N)
//& O(N)
const giveDuplicateOnce = (arr) => {
  let obj = {}
  let ans = []
  for (const val of arr) {
    obj[val] = obj[val] ? obj[val] + 1 : 1
  }
  for (const key in obj) {
    if (obj[key] > 1) {
      ans.push(Number(key))
    }
  }
  console.log(ans)
}

const arr = [1, 2, 2, 3, 4, 10, 4, 7]
console.log(giveDuplicateOnce(arr))
