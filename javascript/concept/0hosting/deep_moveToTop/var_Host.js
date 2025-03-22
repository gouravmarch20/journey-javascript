var a = 88;
function names() {
  if (a === undefined) {
    return "hello   rin";
  } else {
    return "Har";
  }
  var a;
}
console.log(names());

/*
//* hosted to top meaning
function names() {

  //* bts ::: it move to top .... var a; // Declaration is hoisted (but not initialized)
  
  if (a === undefined) {
    return "hello rin";
  } else {
    return "Har";
  }
}


*/
