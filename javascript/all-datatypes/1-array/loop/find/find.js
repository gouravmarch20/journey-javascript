// search => stop futher itteration if one item find
//? return value of it if found , else return undefined
const arr = [4, 'git', 12, 33, 55]
console.log(arr.find(i => i === 'git'))
console.log(arr.find(i => i === 'gitman'))
console.log(arr.find(element => element > 10))
const result = arr.find((value, index) => {
  if (value === 33) {
    return value
  }
})
console.log(result)
