const obj = {
  name: "goku",
  sayHello: function () {
    console.log("hello --> ", this.name)
    const sayBye = function () {
      console.log("bye --> ", this.name)
    }
    sayBye()
  },
}
obj.sayHello()
