// we can acess innerFunction varible later 
//gc not remove that varible so it remain in context
// closure are created whenever a new function is created

// lexical scope :  child ask to parent parent can't -->  a varible defined outside the function can be acess -> inside the another  function also acess but the function define  can not acess

// closure : give acess to an outer scope from an inner function => closure are created every time a function is created
/*
//** closure scope chain -> ref notes
 Every closure has 3 scope => child can ask to parent
 - local
 - outer -> 
 - global ->  window


*/
/* - applcition of closure 
 1.  acess the varbile value --> of it's outer function ==> because GC not remove that varible => it able to knew that below some one is referencing it  
 2. function to have private varible 
*/

const outerFun = () => {
  let data = 'loe123'
  return (innerFun = () => ` acess varible even it's context has been removed ==>  ${data}`)
}

const runInnerFunLevelOne = outerFun()
console.log(runInnerFunLevelOne())
