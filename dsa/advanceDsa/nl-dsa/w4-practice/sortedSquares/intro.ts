//REVISION:
// 977. Squares of a Sorted Array
//& unshift good option to each item in front


/**
  WAY0: two pointer , no space
  //* O(n) , O(1)
  - same array mai make square 
  - two pointer , ignore negative sign ==> largest no fill at last of new array
  //~ arr mai reverse sai assign 
 */
/**
  WAY1: two pointer
  //? O(n) , O(n)
  - two pointer , ignore negative sign ==> largest no fill at last of new array
  //~ arr mai reverse sai assign 
 */
/**
  WAY1: find mid , then apply two pointer --> 
  //? O(n) , O(n)
  - find mid ==> if(arr[i] > 0) m = i
  - left = m -1 , right = m + 1
  - left >= 0 && right < arr.length 
  - left -- , right ++
 */
/**
  WAY2: brute
  //? O(n log n) , O(n)
  - find square sort in array , sort the array
 */

