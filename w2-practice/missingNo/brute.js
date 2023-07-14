/**
 * @param {number[]} nums
 * @return {number}
 */
//* O(n^2)
const lS = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
      if (key === arr[i]) {
        return true
      }
    }
    return false
  }
  var missingNumber = function(nums) {
      nums.sort((a,b) => a-b);
      for (let i = 0; i <= nums.length; i++) {
      if (!lS(nums, i)) {
        return i
      }
      }
  
  };