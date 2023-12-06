var Person = {
  name: 'bolma',

  getName: function () {
    function xyz () {
      console.log(this.name)
    }
    xyz()
  }
}
const abc = Person.getName
abc() // this point to window
