/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//* O(m+n)
//& O(1)

var merge = function (nums1, m, nums2, n) {
    // merge   array  using 3 pointer
    let k = m + n - 1 //m1 : not think k pointing
    let i = m - 1
    let j = n - 1
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k--] = nums1[i--]
      } else {
        nums1[k--] = nums2[j--]
      }
    }
    while (j >= 0) {
      nums1[k--] = nums2[j--]
    }
  
    // median logic odd even
    let n1 = Math.floor(nums1.length / 2)
    if (nums1.length & 1) {
      return nums1[n1]
    } else {
      return (nums1[n1] + nums1[n1 - 1]) / 2
    }
  }
  const nums1 = [1, 2]
  const nums2 = [3]
  const m = nums1.length
  const n = nums2.length
  console.log(merge(nums1, m, nums2, n))
  