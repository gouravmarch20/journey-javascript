//* O(n)
//& space -> O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const myMap = new Map()

  for (const val of nums) {
    if (myMap.has(val)) {
      myMap.set(val, myMap.get(val) + 1)
    } else {
      myMap.set(val, 1)
    }
  }
  for (const [key, val] of myMap) {
    if (Math.floor(nums.length / 2) < val) {
      return key
    }
  }
}
