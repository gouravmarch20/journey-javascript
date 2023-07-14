/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      while (nums[i] === nums[i - 1]) {
        i++
      }
    }
    for (let j = i + 1; j < nums.length; j++) {
      //? j = i + 1 , but there possibility -->
      //? j may pointing to same previous index -> so to avoid we use j++ in loop || continue
      //^ m1 >> write > j > 1 ,   but need to  write j !== i + 1
      //! already did j = i + 1 --> j is point to diff index  , before skip all j case --> we are checking j !== i + 1 --> means i = i , j = i + 1 value same possible  if i skip this case missing
      //* [1  , 2 , 2 , 2] ->
      /*
      ~ i at 0 index , j at 1 
      ~ i at 1 index , j at 2 ==>     SAME VALUE EXIT AT i index change 
      */
      if (j !== i + 1) {
        while (nums[j] === nums[j - 1]) {
          j++
        }
      }

      let k = j + 1
      let l = nums.length - 1
      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l]
        if (sum < target) {
          k++
        } else if (sum > target) {
          l--
        } else if (sum === target) {
          res.push([nums[i], nums[j], nums[k], nums[l]])
          k++
          l--
          while (k < l && nums[k] === nums[k - 1]) {
            k++
          }
          //!m2 --> nums[l - 1]
          //!m3 --> k < l sign opposite
          while (k < l && nums[l] === nums[l + 1]) {
            l--
          }
        }
      }
    }
  }

  return res
}

const nums = [-5, -4, -2, -2, -2, -1, 0, 0, 1]
const target = -9
console.log(fourSum(nums, target))
