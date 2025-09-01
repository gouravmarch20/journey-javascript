//?Object.freeze makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).
const box = { x: 10, y: 20 }

Object.freeze(box)

const shape = box
shape.x = 100

console.log(shape)
console.log(Object.isFrozen(shape))


