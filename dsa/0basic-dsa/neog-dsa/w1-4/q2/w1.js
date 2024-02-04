const mergeArray = (arr1, arr2) => {
  let mergeArr = []
  for (let i = 0; i < arr1.length; i++) mergeArr.push(arr1[i])

  for (let i = 0; i < arr2.length; i++) mergeArr.push(arr2[i])

  return mergeArr
}
console.log(mergeArray([1, 3, 5], [2, 4, 6]))
