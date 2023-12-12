Array.prototype.myConcat = function () {
  const newArray = [...this]
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i]
    if (Array.isArray(element)) {
      newArray.push(...element)
    } else {
      newArray.push(element)
    }
  }
  return newArray
}
const arr1 = [1, 2]
const arr2 = [4, 5]
const arr3 = [7, 8]
const obj1 = { name: " was a fool " }
const newArr = arr1.myConcat(arr2, arr3, "ab", obj1)
console.log(newArr) 
