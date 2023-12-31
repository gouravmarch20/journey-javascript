// whom this should point

const obj1 = {
  age: 34
}
function displayAge () {
  console.log(this.age)
}
displayAge()
