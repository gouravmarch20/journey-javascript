var a = 88;

function outer() {
  function names() {
    if (a === undefined) {
      return "hello rin";
    } else {
      return "Har";
    }
    var a;
  }

  console.log(names()); // What will this log?

  var a = 100;
  console.log(a); // What will this log?
}

outer();
console.log(a); // What will this log?