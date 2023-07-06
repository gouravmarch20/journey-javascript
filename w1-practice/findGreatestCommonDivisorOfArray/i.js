/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    let result = []
    let i = 0
    while(min  >= i){
        if(min % i === 0 && max % i === 0){
            result.push(i)
        }
        i++
    }
    return result[result.length - 1]
};