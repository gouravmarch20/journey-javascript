// implecet binding
// TODO:  DO EXPLEXT FUNCTION --> with arrow funciton
const obj = {
  first: 'go',
  last: 'tan',
  printName: function () {
    console.log(this.first)
  }
}
const obj2 = {
  first: 'goku',
  last: 'sen',
  printName: function () {
    console.log(this.first)
  }
}

obj.printName()
// function borrowing >> function programing ko make more popular copied a feature of OOPs inheritance
obj.printName.call(obj2)// explexit binding now this keyword point to passed object
// obj.printName.bind(obj2)//?
// obj.printName.apply([obj2])
