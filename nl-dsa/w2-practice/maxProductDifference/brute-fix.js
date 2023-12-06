/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let largest = Number.MIN_SAFE_INTEGER
  let largest2nd = Number.MIN_SAFE_INTEGER//?
  let smallest = Number.MAX_SAFE_INTEGER//? first time asign --> min value to smallest 
  let smallest2nd = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    const currentNo = nums[i]

    // ? if twice ==> so in arr[0] ==> min , max logic both secured easily
    //? if arr[0] is max this logic fail ==> asign both arr[0] at inital ,
    if (currentNo >= largest) {
      largest2nd = largest
      largest = currentNo
    } else if (currentNo < largest && currentNo > largest2nd) {
      largest2nd = currentNo
    }
    //
    if (currentNo <= smallest) {
      smallest2nd = smallest
      smallest = currentNo//~ arr[0] --> case mai int_min assign
    } else if (currentNo > smallest && currentNo < smallest2nd) {
      smallest2nd = currentNo
    }
  }

  console.log(smallest, smallest2nd , largest , largest2nd)
  // return largest * largest2nd - smallest * smallest2nd
}
// const nums = [1, 6, 7, 3, 10, 6, 4]
const nums = [10,10,10,10]



console.log(maxProductDifference(nums))
