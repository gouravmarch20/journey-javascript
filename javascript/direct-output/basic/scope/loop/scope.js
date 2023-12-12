var num2 = 4 //asing in window object
{
  var num2 = 48 // override -> function scope -> so window mai it fall
}
function alpha () {
  var num2 = 33 // function scope ==?> owm Ec mai create
  console.log(num2)
}
alpha()
console.log(num2)
