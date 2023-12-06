const sumOfNaturalNo = num => {
  let sum = 0
  
  for (let i = 1; i <= num; i++) {
    console.log(i)
    sum += i
  }
  console.log(sum)
}
console.log(sumOfNaturalNo(100))
