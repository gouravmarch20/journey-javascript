//print subarray
function printSubarrays(arr) {
    let n = arr.length;
  
    // Iterate over all possible subarray lengths
    for (let len = 1; len <= n; len++) {
      // Iterate over all starting indices
      for (let start = 0; start <= n - len; start++) {
        // Get the ending index of the subarray
        let end = start + len - 1;
  
        // Print the subarray
        let subarray = arr.slice(start, end + 1);
        console.log(subarray);
      }
    }
  }
  
  // Test the function with [1, 2, 3]
  let arr = [1, 2, 3];
  printSubarrays(arr);
  