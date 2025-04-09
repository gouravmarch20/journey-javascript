if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (callback) {
    if (this == null) {
      throw new TypeError("Array.prototype.myFind called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError("callback must be a function");
    }

    let array = this;
    let length = array.length;

    for (let i = 0; i < length; i++) {
      if (callback(array[i], i, array)) {
        return array[i];
      }
    }
    return undefined;
  };
}

// Test case
let numbers = [10, 20, 30, 40];
let result = numbers.myFind((num) => num > 25);
console.log(result); // Should print 30
