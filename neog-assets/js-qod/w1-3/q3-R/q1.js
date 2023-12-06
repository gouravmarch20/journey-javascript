// m1 : using for loop to itterate each it --< sort methord itterate by owm
const sortArray = arr => {
 const shorted =  arr.sort((num1, num2) => {
    return num1 - num2
  })
  return shorted
}
console.log(sortArray([100, 83, 32, 9, 45, 61, 45]))
