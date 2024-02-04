function checkIfAdditionEqualsTarget (nums, target) {
  let trackedNumbers = {}
  for (let i = 0; i < nums.length; i++) {
    // working of if block 
    //- ! --> true ko false , false ko true
    //- case : if that no available in object key return undefined -> ! sai -> if block run --> that key add 
    // - if key found else key run means current number & target-num[i] or no that match is the pair

    if (!trackedNumbers[target - nums[i]]) {
      trackedNumbers[nums[i]] = true
    } else return [nums[i], target - nums[i]]
  }
  return []
}
console.log(checkIfAdditionEqualsTarget([4, 7, 11, 15], 18))
