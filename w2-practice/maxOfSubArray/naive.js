var maxOfSubarray = function (arr, k) {
  let res = []
  let m = Number.MIN_SAFE_INTEGER
  // !m1--> for to limit range of loop
  // !m2--> forget simple iteration using kind of sliding window logic in  simpleiteration
  for (let i = 0; i < arr.length - k; i++) {
    console.log(i)
    for (let j = i ; j <= i + k - 1; j++) {
      m = Math.max(m, arr[j])
    }
    res.push(m)
    m = Number.MIN_SAFE_INTEGER
  }
  console.log(res)
}
// const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
const arr =[1,2]
const k = 1
console.log(maxOfSubarray(arr, k))
