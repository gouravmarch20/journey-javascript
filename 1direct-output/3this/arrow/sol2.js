// explecit bind : call

var Person = {
    name: 'bolma',
  
    getName: function () {
        var self = this
      function xyz () {
        console.log(self)
      }
      xyz()
    }
  }
  Person.getName()
  