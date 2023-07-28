const singleNumber = (nums) => {
    // Your code goes here
 let d = 0 ;
for(let i = 0 ; i < nums.length ; i++){
 d=    d ^ nums[i]
}
return d;
}