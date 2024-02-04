// what is curring function
// -> calling a function inside a function again and again
//-> closure concept 
const fun1 = () => () => () => 5
console.log(fun1()()());