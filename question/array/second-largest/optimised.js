const arr = [1, 88, 88, 22, 55, -99, 101, 101]
const getSecondLargestElement = arr => {
  let largestNo = Number.NEGATIVE_INFINITY
  let secondLargestNo = Number.NEGATIVE_INFINITY
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (largestNo < element) {
      secondLargestNo = largestNo
      largestNo = element
    } else if (element < largestNo && element > secondLargestNo) {
      secondLargestNo = element
    }
  }
  return secondLargestNo
}
console.log(getSecondLargestElement(arr))

//! O(n) ==> Time Complexity
//! O(1) ==> Space Complexity
