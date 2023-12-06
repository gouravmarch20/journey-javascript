const person = {
  name: 'alpha',
  test () {
    setTimeout(function () {
      console.log(this)
    }, 1000)
  }
}
person.test()
