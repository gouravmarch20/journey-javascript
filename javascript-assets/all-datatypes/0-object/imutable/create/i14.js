let a = { name: 'foo' }
let b = Object.create(a)

delete a.name
console.log(b.name)