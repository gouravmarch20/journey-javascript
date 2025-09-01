// we delete b property with b but a still have name ==> __proto__ mai it has inherit

let a = { name: 'foo' , section:2 , class : 9 }
let b = Object.create(a )

//? override inheritance 
b.name ="ga-ti"
b.k ="hello"
//? not show proto wall properties
console.log(b);

delete b.name
//? deleted but still ... access --> inheritance mai present  

console.log(b.name)
console.log(b.k)
