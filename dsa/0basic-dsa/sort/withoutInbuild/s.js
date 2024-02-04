//* O(N^2)
//& O(1)
const sortSelf = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (min !== i) {
      ;[arr[min], arr[i]] = [arr[i], arr[min]]
    }
  }
return arr
}
const arr = [8, 0, 4, 9, 2, 1, 4, 5]
console.log( sortSelf(arr))
