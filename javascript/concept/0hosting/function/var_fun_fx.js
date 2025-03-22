function a() {
  console.log("20");
}

a();
var a = 10;
console.log(a);
// console.log(a());//! prove override taken 

/*
_ mc : function a hosted , var a ==> hosted in seperate space no asign of value

_ec : function call ,,,,, var a ... now value assign and function a ko override to 10 

*/