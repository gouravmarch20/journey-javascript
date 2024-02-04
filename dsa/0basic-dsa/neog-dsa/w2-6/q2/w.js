const getAssendingOdd = num => {
  let maxOdd = num * 2 - 1
  for (let i = 0; i < num; i++) {
    console.log(maxOdd - 2 * i)
  }
}
console.log(getAssendingOdd(2))
