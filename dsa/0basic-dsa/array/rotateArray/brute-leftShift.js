//* O(n^2)
//&  O(n)

const rotate = (arr, no) => {
  const ans = [...arr]
  const rotations = no % ans.length

  for (let i = 0; i < rotations; i++) {
    const temp = ans[0]
    for (let j = 0; j < ans.length - 1; j++) {
      ans[j] = ans[j + 1]
    }
    ans[ans.length - 1] = temp
  }

  return ans
}

const arr = [1, 3, 5, 9]

console.log(rotate(arr, 1))
