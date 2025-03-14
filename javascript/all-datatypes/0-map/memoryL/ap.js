 
 function detectMemoryLeak(threshold) {
    let memorySet = new Set();
    return {
      allocate(obj){
        memorySet.add(obj)
      },
      deallocate(obj){
        memorySet.delete(obj)
      },
      isLeaking(){
        return memorySet.size > threshold;
      }
    }
      
  }
  

// Create a memory leak detector with a threshold of 3 objects
const leakDetector = detectMemoryLeak(3);

// Simulate object allocations
let obj1 = { data: 'Object 1' };
let obj2 = { data: 'Object 2' };
let obj3 = { data: 'Object 3' };
let obj4 = { data: 'Object 4' };

// Allocate objects
leakDetector.allocate(obj1);
leakDetector.allocate(obj2);
leakDetector.allocate(obj3);
leakDetector.allocate(obj4); // Exceeds the threshold

// Check for memory leaks
console.log(leakDetector.isLeaking()); // true, because we have 4 allocated objects, and the threshold is 3

// Deallocate an object
leakDetector.deallocate(obj1);

// Check again
console.log(leakDetector.isLeaking()); // false, now only 3 objects remain
