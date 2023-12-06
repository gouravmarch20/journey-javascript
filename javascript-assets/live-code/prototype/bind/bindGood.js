let obj = {
  name: 'goku'
}
let objTwo = {
  name: 'gotan'
}

function printName () {
  console.log(this.name)
}

const printMyName = printName.bind(objTwo)
printMyName()
