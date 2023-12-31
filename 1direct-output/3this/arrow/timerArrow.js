
const person = {
  name: 'alpha',
  test () {
    setTimeout(() => {
      console.log(this)
    }, 1000)
  }
}
person.test()
