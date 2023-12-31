const person = {
  name: 'alpha',
  test () {
    const self = this
    setTimeout(function () {
      console.log(self)
    }, 1000)
  }
}
person.test()
