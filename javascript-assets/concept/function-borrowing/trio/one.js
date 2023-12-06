// every function has 3 properties --> call , bind , apply
const displayName = () => console.log('gotan')
displayName()
// *** BEHIND THE sense -> this happen when we invoke any function 
displayName.call("gotan")
displayName.apply()

// ? need of these function properties  -->  in object --> for function borrowing --> we defined a function && we want that function can be acess by our other create object  ==> so by call/ bind / apply -->  this able to point the object varible --> and that object will now use that funciton 

// call -> 1 argument : which object to point  ,2argument : passing params modification in this value or display more inppt
// *** code optimision part avoiding same methord to re-write again and again