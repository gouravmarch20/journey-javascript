// ! y : high order function, x : callback function
function x() {
  console.log("then runned callback function")
}

function y() {
  console.log("--- perform some logic")

  x()
}
y()
