let nameObj = {
  name: 'goku',
  lastName: 'say'
}

let printName = function (hometown, state) {
  console.log(
    this.name + ' ' + this.lastName + ' ' + hometown + ' ' + state
  )
}

Function.prototype.mybind = function (...args) {
  // console.log(this);// ** this point to object who call here function ko he point

  let refObj = this
  params = args.slice(1)

  return function (...args2) {
    refObj.apply(args[0], [...params, ...args2])
  }
}
let printMyName = printName.mybind(nameObj, 'ranchi')
printMyName('bihar')
