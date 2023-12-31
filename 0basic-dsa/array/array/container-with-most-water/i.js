const containerWithMostWater = arr => {
  let left = 0
  let right = arr.length - 1
  let maxArea = 0
  for (let i = 0; i < arr.length; i++) {
    area = (right - left) * Math.min(arr[left], arr[right])
    maxArea = Math.max(maxArea, area)
    if (arr[left] > arr[right]) {
      right--
      console.log('right')
    } else if (arr[left] < arr[right]) {
      console.log('left')

      left++
    } else if (arr[left] === arr[right]) {
      console.log('eq')
      left++
      right--
    }
  }
  return maxArea
}
console.log(containerWithMostWater([2, 5, 7, 7]))
