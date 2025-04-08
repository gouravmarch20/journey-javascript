const array = [1, "hello", "3"];

const fun1 = function (array) {
  let currIndex = 0;
  return {
    get isCompleted() {
      // Make it a getter that recomputes
      return currIndex >= array.length;
    },
    getNext: function () {
      if (this.isCompleted) return null;
      return array[currIndex++];
    },
    h: ":",
  };
};

const iterator = fun1(array);

console.log(iterator.getNext()); // 1
console.log(iterator.getNext()); // "hello"
console.log(iterator.isCompleted); // false
console.log(iterator.getNext()); // "3"
console.log(iterator.isCompleted); // true
console.log(iterator.getNext()); // null
