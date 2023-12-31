arr = [2, 2, 2, 3, 3, 3, 4, 4, 4, 2, 5, 5, 5, 4, 5, 5, 1, 1, 1, 1, 1, 1]
//m1 : key min case fill 0 every number here is less than zero
//l1 > key store as string 
const leastFrequent = arr => {
  let numCount = {}
  let returnData = { min: 9, count: 0 }
  for (const iterator of arr) {
    numCount.hasOwnProperty(iterator)
      ? numCount[iterator]++
      : (numCount[iterator] = 1)
  }
  //   console.log(numCount) //! obj key type string // TODO: important
  for (const [key, value] of Object.entries(numCount)) {
    if (value > returnData.count) {
      if (key < returnData.min) {
        returnData.min = key
        returnData.count = value
      }
    }
  }
  console.log(returnData)

}

console.log(leastFrequent(arr))
