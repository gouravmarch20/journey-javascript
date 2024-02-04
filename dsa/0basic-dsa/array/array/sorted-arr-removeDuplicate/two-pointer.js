const arr = [1, 1, 3, 3, 3, 8, 8]
const removeDuplicateFormSortedArray = arr => {
  if (arr.length === 0) return 0
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    const element = arr[j]
    if (element === arr[j + 1]) {
      arr[i] = arr[j]
    } else {
      i++
    }
  }
return [i , arr.slice(0,i)]
}

console.log(removeDuplicateFormSortedArray(arr))

// ! TIME COMPLIXITY : O(n)
//! SPACE COMPLIXITY : O(1)
