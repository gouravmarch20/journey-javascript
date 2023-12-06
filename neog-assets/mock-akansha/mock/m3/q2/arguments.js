
// -> arguments ==> an object 
function myFunction () {

  console.log(arguments[0])
  console.log(Array.isArray(arguments))
  // arguments.forEach((arg)=>{
  //   console.log(arg);
  // })
}

myFunction(5, 8989, 'c')
