function test () {
  let a = 'hello'
  console.log(a)
  if (true) {
    console.log(a)//** varible shadowing
  }
  console.log(a)
}
test()