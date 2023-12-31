// explecit bind : call

var Person = {
  name: 'bolma',

  getName: function () {
    function xyz () {
      console.log(this)
    }
    xyz.call(this)
  }
}
Person.getName()
