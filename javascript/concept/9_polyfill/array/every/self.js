Array.prototype.myEvery = function (callback) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false; // If any element doesn't pass the test, return false immediately
      }
    }
    
    return true; // If all elements pass, return true
  };
  
  // Usage Example:
  const arr = [1, 2, 3, 4, 5];
  
  const isAllPositive = arr.myEvery((num) => num > 0);
  console.log(isAllPositive); // true
  
  const isAllEven = arr.myEvery((num) => num % 2 === 0);
  console.log(isAllEven); // false
  
  const isGreaterThanFive = arr.myEvery((num) => num > 5);
  console.log(isGreaterThanFive); // false
  