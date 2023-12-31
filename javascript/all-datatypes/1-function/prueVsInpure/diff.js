const arr = [5 , 9 , 12 ]
const r1 = arr.filter(i => i > 9)//? pure 1 function 
console.log(r1);

function hello(params) {
   return  arr.filter(i => i > 9)//^ impure function mai another function 
}
console.log(hello());