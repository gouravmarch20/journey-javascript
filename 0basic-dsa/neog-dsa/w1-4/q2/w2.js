const mergeArray = (arr1, arr2) => {
  const mergeArr = []
  const pushToArr = arr => {
    for (let i = 0; i < arr.length; i++) mergeArr.push(arr[i])
  }
  pushToArr(arr1)
  pushToArr(arr2)
  return mergeArr
}
console.log(mergeArray([1, 3, 5], [2, 4, 6]))
