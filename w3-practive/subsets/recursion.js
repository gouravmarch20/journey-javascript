/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// !m1: declare as global , next test case this value remain prev asign value no clean  --> because function call mai args change 
// let output = []
var helperSubsets = function (nums, i, temp , output) {
    if (i >= nums.length) {
      output.push([...temp])
      return
    }
    //inc
    temp.push(nums[i])
    helperSubsets(nums, i + 1, temp,output)
    temp.pop()
    helperSubsets(nums, i + 1, temp,output)
  }
  var subsets = function(nums) {
    let output = []
  
      helperSubsets(nums , 0 , [] ,output)
      return output;
  };
const nums = [0]
let output = []

console.log(subsets(nums))
console.log(output)
