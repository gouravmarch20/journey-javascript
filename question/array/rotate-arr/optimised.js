
const rotateArrayOptimised = (nums, k) => {
   let size = nums.length
   if (size > k) {
      k = k % size
   }
   reverse(nums, 0, nums.length - 1)
   reverse(nums, 0, k-1)
   reverse(nums, k, nums.length - 1)
   return nums
}
const reverse = (nums, left, right) => {
   while (left < right) {
      const temp = nums[left]
      nums[left++] = nums[right]
      nums[right--] = temp
   }
}
console.log(rotateArrayOptimised([1 , 2 , 3 , 4 , 5 , 6 , 7] , 3));
console.log(rotateArrayOptimised([1 , 2 , 3 , 4 , 5 , 6 , 7] , 2));
// ! TIME COMPLEXITY : O(n) + O(k) + O(k - nums ) ==> O(n)
// ! SPACE COMPLEXITY : O(1)