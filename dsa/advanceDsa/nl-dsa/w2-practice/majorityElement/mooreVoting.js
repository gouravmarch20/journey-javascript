//* O(n)
//& space -> O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let c = 0
  let mE = nums[0]
  let c1 = 0
  for (let i = 0; i < nums.length; i++) {
    if (mE === nums[i]) {
      c++
    } else if (c === 0) {
      mE = nums[i]
      c++
    } else {
      c--
    }
  }
  //^ self verify is majority element is true or not
  for (const val of nums) {
    if (mE === val) {
      c1++
    }
  }
  return c1 > Math.floor(nums.length / 2) ? `found ${mE}` : "not found"
}

const nums = [2, 2, 1, 1, 1, 2]//^ 50% is not majority
console.log(majorityElement(nums))
