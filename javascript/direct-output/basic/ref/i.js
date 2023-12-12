
let person = { name: "peter" };
const members = [person];// array mai  ref of obj 
person = null;
console.log(members );
console.log(person );
