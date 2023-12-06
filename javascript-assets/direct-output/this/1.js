// whom this should point
function displayAge () {
  console.log(this.age)
}
const obj1 = {
  age: 34
}

obj1.displayAge()
