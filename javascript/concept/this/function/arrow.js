const obj = {
  name: 'goku',
  sayHello: () => {
    console.log('hello --> ', this.name)

    const sayBye = () => {
      console.log('bye --> ', this.name)
    }
    sayBye()
  }
}
obj.sayHello()
