const arr = [1, 2, 3, 2, 2, 3]
const getArrCount = arr => {
  const obj = {}
  for (const i of arr) {
    obj[i] ? obj[i] + 1 : (obj[i] = 1)
  }
  console.log(obj)
}
getArrCount(arr)
