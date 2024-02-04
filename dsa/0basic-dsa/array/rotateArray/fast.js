//* O(n^2)
//&  O(n)

const rotate = (arr, no) => {
  const ans = []

  no = no % arr.length

  for (let i = 0; i < arr.length; i++) {
    ans[(i + no) % arr.length] = arr[i]
  }
  return ans
}
const arr = [1, 3, 5, 9]

console.log(rotate(arr, 2))
