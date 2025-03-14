Function.prototype.myBind = function (context, ...params) {
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }

  return (...args) => {
    return this.apply(context, [...params, ...args]);
  };
};

 
function multiply(a, b) {
  return a * b;
}
const boundMultiply = multiply.myBind(null, 2);
console.log(boundMultiply(3));
console.log(boundMultiply(10));
console.log(boundMultiply(12));
