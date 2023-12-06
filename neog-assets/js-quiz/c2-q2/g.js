var obj = {
  name: 'Aman',
  getName: function () {
    console.log(this.name)
  }
}

var getName = obj.getName
var obj2 = { name: 'Akshay', getName }
obj2.getName()
