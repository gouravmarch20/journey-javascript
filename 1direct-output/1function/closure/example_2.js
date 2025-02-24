function outerFunction() {
  var outerVar = "I am from the outer function";
  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from innerFunction
    return outerVar;
  }
  return innerFunction;
}
outerFunction()();
