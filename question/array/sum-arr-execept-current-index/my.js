const arr = [2,7, 11 , 4 , -2]
const sumExceptCurrent = arr => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    let tempArr = []
    //  console.log(arr.slice(0, i), arr.slice(i + 1))
    tempArr = [].concat(arr.slice(0, i), arr.slice(i + 1))
    //  console.log(tempArr)
    const sum = tempArr.reduce((acc, curr) => acc + curr, 0)
    result.push(sum)
  }
  return result
}
console.log(sumExceptCurrent(arr))

// console.log(arr.slice(0 , 1))
