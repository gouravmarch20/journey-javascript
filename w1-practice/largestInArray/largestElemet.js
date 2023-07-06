function findLargestElement(nums) {

  let maxNum = nums[0]; // Initialize maxNum to the first element
  for (let i = 1; i < nums.length; i++) { // Iterate from the second element
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }
  return maxNum;
}
console.log(findLargestElement([5, 1, 4, 6, 6]))
