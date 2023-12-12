const arr = [1, 2, [3, 4, [5, 6]]];
//& reduce --> acc storing previous value
//& concat --> combined 
//& function call mai decrease each depth
//^ having base case too
Array.prototype.flat = function(depth){
    let flattenDepth = (depth === undefined) ? 1 : Math.floor(depth);
    if (flattenDepth < 1) {
      return this.slice();
    }
    return this.reduce(function(acc, val) {
      return acc.concat(Array.isArray(val) ? val.flat(flattenDepth - 1) : val);
    }, []);
}

const flattened = arr.flat(2);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]