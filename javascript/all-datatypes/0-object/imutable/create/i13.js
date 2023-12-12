// we delete b property with b but a still have name ==> __proto__ mai it has inherit
// TODO:  explore
let a = { name: 'foo' }
let b = Object.create(a)
delete b.name
console.log(b.name)
