/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const  n = nums.length ;
    const result = [];
     for(let i = 0 ; i < (1 << n ) ; i++ ){
         let temp = [];
         for(let j = 0 ; j < n ; j++){
             if( i & (1<<j) ){
                 temp.push(nums[j]);
             }
         }
         result.push(temp)
     }
     return result;
 };