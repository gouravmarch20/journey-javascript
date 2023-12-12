const obj = {
  name: 'goku',
  sayHello: function () {
    console.log('hello --> ', this.name)
    //
    const sayBye = () => {
      console.log('bye --> ', this.name)
    }
    sayBye()
  }
}
obj.sayHello()
