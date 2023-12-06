// explecit bind : call

var Person = {
  name: 'bolma',

  getName: function () {
    const xyz = () => {
      console.log(this)
    }
    xyz()
  }
}
Person.getName()
