// const arr = [1, [3, 4, [5, [6]]] , 7];
const arr = [1, [[2 ]] , 3 , 7];
//& reduce --> acc storing previous value
//& concat --> combined 
//& function call mai decrease each depth
//^ having base case too
Array.prototype.myFlat = function(depth){
    let flattenDepth = (depth === undefined) ? 1 : depth;

    // ? stop more flat , further fating no need
    if (flattenDepth < 1) {
      return this.slice();
    }
    //? array ka item access --> make val and push in acc
    return this.reduce(function(acc, val) {

      return acc.concat(Array.isArray(val) ? val.myFlat(flattenDepth - 1) : val);
    }, []);
}

const flattened = arr.myFlat(2);
console.log(flattened); 