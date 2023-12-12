
// can not call first - define later in arrow function because function is store varible 

//if varible is  var return undefined , let/const not hosted due to temporal dead zone  
console.log(a())
let a = () => {
  console.log('object')
}


