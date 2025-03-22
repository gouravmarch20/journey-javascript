console.log(typeof a); // What will this log?
console.log(foo()); // What will this log?

var a = 42;

function foo() {
  return "Hello from foo";
}

(function () {
  console.log(a); // What will this log?
  
  var a = 100;

  function bar() {
    console.log(a); // What will this log?
    
    setTimeout(function () {
      console.log(a); // What will this log?
      a = 200;
      console.log(a); // What will this log?
    }, 1000);
    
    return function () {
      console.log(a); // What will this log?
    };
  }

  let closureFunc = bar();
  closureFunc();
  
  console.log(a); // What will this log?
})();
console.log(a); // What will this log?
