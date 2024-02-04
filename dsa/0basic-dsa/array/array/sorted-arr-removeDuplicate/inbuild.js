const arr = [1, 1, 3, 3, 3, 8, 8]
const removeDuplicateFormSortedArray = arr => {
  for (let i = 0; i < arr.length; i++) {//O(n)
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1)//O(1)
      i--
    }
  }
  return arr
}

console.log(removeDuplicateFormSortedArray(arr));

// ! TIME COMPLIXITY : O(n)
//! SPACE COMPLIXITY : O(1)