// *O(n^2)
// &O(n^2)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const count = new Array(101).fill(0) // 101 elements (0 to 100)
  const result = []
  // Count the frequency
  for (const num of nums) {
    count[num]++
  }

  // Calculate the cumulative sum
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]
  }

  // making result -> ignore 0 count & undefined cases + left is correct less than count so -1 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      result[i] = 0
    } else {
      result[i] = count[nums[i] - 1]
    }
  }
  return result
}
console.log(smallerNumbersThanCurrent([ 6, 1, 2, 2, 3]))
