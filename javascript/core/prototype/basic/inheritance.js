// object create 3 way
// const objW1 = new Object({
//   name: 'gitman'
// })
// const objW2 = new obj()
const obj1 = {
  name: 'obj1 creater',
  role: 'sde',
  getName: function () {
    return this.name
  },
  getSalary: function () {
    return this.salary
  }
}
// console.log(objW3)
const obj2 = {
  name: 'obj2 creater',
  salary: 55,
  __proto__: obj1
}
const obj3 = {
  name: 'obj3 creater',
  language: 'js',
  __proto__: obj2
}
console.log(obj2.salary)
console.log(obj2.getName()) //
console.log(obj2.getSalary())
console.log(obj3)
console.log(obj3.role)
// ** owm prototype add

function MyPrototype (name , language) {
  this.name = name
  this.language = language
}
MyPrototype.prototype = obj3
const myProto = new MyPrototype('sexana' , 'c#')
console.log(myProto);
console.log(myProto.getSalary());
