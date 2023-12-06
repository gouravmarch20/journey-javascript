// ! spread in object
const person = {
  name: 'gourav',
  age: 44
}
const birthday = person => ({ ...person, age: person.age + 1 })
console.log(birthday(person))
