var a = 10;
console.log(a);

function a() {
  console.log("20");
}

a(); // a = 10 so error

/*
_ mc :  var a ==> hosted in seperate space no asign of value , function a hosted with body 

? _ec : var a at memory assign mai asign value ... now value assign  override function a ... then a call mai error it no more function now

*/