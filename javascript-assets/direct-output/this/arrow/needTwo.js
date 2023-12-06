var Person = {
  name: 'bolma',
  getName: function () {
    console.log(this)
  }
}
const abc = Person.getName
abc()// this point to window 