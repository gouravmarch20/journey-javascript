;(function () {
  console.log(typeof this)
  console.log(this)
}.call(10))//call invokes the function with new this which in this case is 10 which is basically a constructor of Number and Number is object in javascript.


